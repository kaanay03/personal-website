import './Projects.css'
import { useEffect, useState } from 'react';
const Cosmic = require('cosmicjs')()

function Projects(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects()
    }, [])

    const getProjects = async() => {
        Cosmic.bucket({
            'slug': 'kaanxyz',
            'read_key': process.env.REACT_APP_READ_KEY
        }).getObjects({
            query:{
                type: "projects"
            },
            props: "metadata"
        }).then(data =>{
            setProjects(data.objects);
        })
    }

    return(
        <div id="projects-content text-center">
            <h1 id="name-heading" className="text-center" style={{'fontSize': '35px'}}>Projects</h1>

            <div className="container home-container mt-4">
                <div className="card-columns" style={{'columnCount': '3'}}>
                    { projects.map((project, i) => (
                        <div className="card project-card" key={i}>
                            { (project.metadata.thumbnail.url) &&
                                <img src={project.metadata.thumbnail.url} alt={project.metadata.name + "Example"} className="card-img-top w-100 d-block" />
                            }
                            <div className="card-body">
                                <h4 className="card-title">{project.metadata.name}</h4>
                                <div className="badge-container">
                                    {project.metadata.tags.map((tag, i) => (
                                        <span className={"badge badge-pill project-badge bg-" + tag.metadata.color.value} key={i}>{tag.metadata.name}</span>
                                    ))}
                                </div>
                                <p className="card-text project-description">{project.metadata.description}</p>
                                { (project.metadata.github_link).length > 0 &&
                                    <a href={project.metadata.github_link}  target="_next" className="btn btn-primary btn-dark project-btn" type="button"><i className="fab fa-github"></i> GitHub</a>
                                }
                                { (project.metadata.website_link).length > 0 &&
                                    <a href={project.metadata.website_link} target="_next" className="btn btn-primary project-btn" type="button"><i className="fa fa-globe"></i> Visit</a>
                                }
                            </div>
                        </div> 
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Projects;