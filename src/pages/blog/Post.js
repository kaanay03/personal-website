import './Post.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import NotFound from '../notfound/NotFound';
const Cosmic = require('cosmicjs')();

function Post() {
    let { slug } = useParams();
    const [post, setPost] = useState();

    useEffect(() => {
        getPost();
    }, [])

    const getPost = async () => {
        Cosmic.bucket({
            'slug': 'kaanxyz',
            'read_key': process.env.REACT_APP_READ_KEY
        }).getObjects({
            query:{
                type: "posts",
                slug: slug
            },
            props: "title,created_at,slug,metadata.content"
        }).then(data =>{
            setPost(data.objects[0]);
        }).catch(error =>{
            setPost(error);
        });
    }

    if (post && post.status === 404) {
        return <NotFound />
    }

    return(
        <div>
            { post  &&
                <div id="blog-content" className="text-center">
                    <h1 id="name-heading" className="text-center" style={{'fontSize': '35px', 'margin': '0'}}>{post.title}</h1>
                    <small>{new Date(`${post.created_at}`).toLocaleString('en-us', {month: 'short', day: 'numeric', year: 'numeric'})} | Kaan Aydogan</small>
                    <div className="container home-container mt-4 post-container">
                        <div dangerouslySetInnerHTML={{__html: post.metadata.content}} />
                    </div>
                    <div class="mt-5">
                        <Link id="back-button" to="/blog"><i className="fas fa-arrow-circle-left"></i> Back to Posts</Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default Post;