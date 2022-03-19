import './Profile.css'
import { useEffect, useState } from 'react';
const Cosmic = require('cosmicjs')()


function Profile(){
    const [profileData, setProfileData] = useState();

    useEffect(()=>{
        getProfileData();
    },[])

    const getProfileData = async() => {
        Cosmic.bucket({
            'slug': 'kaanxyz',
            'read_key': process.env.REACT_APP_READ_KEY
        }).getObjects({
            query:{
                slug: "settings"
            },
            props: "metadata.description, metadata.avatar"
        }).then(data =>{
            setProfileData(data.objects[0]);
        }).catch(error => {
            setProfileData(error);
        })
    }

    return(
        <div id="profile-content">
            { profileData &&
                <div id="image-row">
                    <div className="text-center">
                        <img id="avatar-img" src={profileData.metadata.avatar.url} width="185" height="185" alt="Profile"></img>
                    </div>

                    <div id="info-row" className="mt-3">
                        <div className="text-center">
                            <h1 id="name-heading">Kaan Aydogan</h1>
                            <h3 id="description-label">{profileData.metadata.description}</h3>
                            <div id="action-btn-group">
                                <a href="https://linkedin.com/in/kaanaydogan" target="_next" className="btn action-btn"><i className="fab fa-linkedin"></i> LinkedIn</a>
                                <a href="https://github.com/kaanay03" target="_next" className="btn action-btn"><i className="fab fa-github"></i> GitHub</a>
                                <a href="https://cdn.kaan.xyz/resume.pdf" target="_next" className="btn action-btn"><i className="fa fa-file"></i> Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Profile;