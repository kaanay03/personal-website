import './Profile.css'

function Profile(){
    return(
        <div id="profile-content">
            <div id="image-row">
                <div className="text-center">
                    <img id="avatar-img" src={process.env.PUBLIC_URL + '/img/kaanav.png'} width="185" height="185" alt="Profile"></img>
                </div>
            </div>

            <div id="info-row" className="mt-3">
                <div className="text-center">
                    <h1 id="name-heading">Kaan Aydogan</h1>
                    <h3 id="description-label">Developer and Computer Science Student</h3>
                    <div id="action-btn-group">
                        <a href="https://linkedin.com/in/kaanaydogan" target="_next" className="btn action-btn"><i className="fab fa-linkedin"></i> LinkedIn</a>
                        <a href="https://github.com/kaanay03" target="_next" className="btn action-btn"><i className="fab fa-github"></i> GitHub</a>
                        <a href="https://cdn.kaan.xyz/resume.pdf" target="_next" className="btn action-btn"><i className="fa fa-file"></i> Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;