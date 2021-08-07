import { useEffect, useState } from 'react';
import './About.css';
const Cosmic = require('cosmicjs')()

function About(){
    const [content, setContent] = useState("");

    useEffect(() => {
        getContent()
    }, [])

    const getContent = async () => {
        Cosmic.bucket({
            'slug': 'kaanxyz',
            'read_key': process.env.REACT_APP_READ_KEY
        }).getObjects({
            query: {
                slug: "about"
            },
            props: "metadata.content"
        }).then(data => {
            setContent(data.objects[0].metadata.content);
        })
    }
    getContent();

    return(
        <div id="about-content text-center">
            <h1 id="name-heading" className="text-center" style={{'fontSize': '35px'}}>About Me</h1>

            <div className="container home-container mt-4">
                { content === "" &&
                    <p></p>
                }
                <div dangerouslySetInnerHTML={{__html: content}} />
            </div>
        </div>
    );
}

export default About;