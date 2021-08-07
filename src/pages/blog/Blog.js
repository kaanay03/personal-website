import './Blog.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const Cosmic = require('cosmicjs')()

const postChunkSize = 4;

function Blog(){
    const [posts, setPosts] = useState([]);
    const [displayedPosts, setDisplayedPosts] = useState([]);

    useEffect(() => {
        getPosts();
        // console.log(posts)
        if (displayedPosts.length === 0){
            setDisplayedPosts([...posts].splice(0, postChunkSize));
        }
    }, [posts, displayedPosts])

    const getPosts = async ()=>{
        Cosmic.bucket({
            'slug': 'kaanxyz',
            'read_key': process.env.REACT_APP_READ_KEY
        }).getObjects({
            query:{
                type: "posts"
            },
            props: "title,created_at,slug,metadata.description"
        }).then(data =>{
            setPosts(data.objects);
        })
    }

    function loadMore(){
        let endIdx = Math.min(posts.length, (displayedPosts.length + postChunkSize));
        console.log(`End idx: ${endIdx}`)
        setDisplayedPosts([...posts].splice(0, endIdx));
    }

    console.log(posts);

    return(
        <div id="blog-content" className="text-center">
            <h1 id="name-heading" className="text-center" style={{'fontSize': '35px'}}>Blog</h1>

            <div className="container home-container mt-4">
                { displayedPosts.map((post, i) => (
                    <div className="card post-card" key={i}>
                        <div className="card-body text-align-left">
                            <h2 className="card-title">{post.title}</h2>
                            <small>{new Date(`${post.created_at}`).toLocaleString('en-us', {month: 'short', day: 'numeric', year: 'numeric'})}</small>
                            <p>{post.metadata.description}</p>
                            <Link to={"/blog/" + post.slug} className="blog-link">Continue Reading</Link>
                        </div>
                    </div>
                ))}

                { displayedPosts.length < posts.length &&
                    <div className="text-center">
                        <button id="load-more" onClick={loadMore} className="btn btn-sm btn-dark">Load More  <i className="fas fa-angle-double-down"></i></button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Blog;