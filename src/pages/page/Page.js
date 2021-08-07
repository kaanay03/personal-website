import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NotFound from '../notfound/NotFound';
const Cosmic = require('cosmicjs')()

function Page(){
    let { slug } = useParams();
    const [page, setPage] = useState();

    useEffect(()=>{
        getPage();
    },[])

    const getPage = async ()=>{
        Cosmic.bucket({
            'slug': 'kaanxyz',
            'read_key': process.env.REACT_APP_READ_KEY
        }).getObjects({
            query:{
                type: "pages",
                slug: slug
            },
            props: "title,slug,metadata.content"
        }).then(data =>{
            setPage(data.objects[0]);
        }).catch(error => {
            setPage(error);
        })
    }

    if (page  && page.status === 404){
        return <NotFound />
    }

    return(
        <div>
            { page &&
                <div id="page-content" class="text-center">
                    <h1 id="name-heading" className="text-center" style={{'fontSize': '35px'}}>{page.title}</h1>
                    <div className="container home-container mt-4 post-container">
                        <div dangerouslySetInnerHTML={{__html: page.metadata.content}} />
                    </div>
                </div>
            }
        </div>
    )
}

export default Page;