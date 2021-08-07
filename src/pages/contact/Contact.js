import './Contact.css';

function Contact(){

    return (
        <div id="about-content text-center">
            <h1 id="name-heading" className="text-center" style={{'fontSize': '35px'}}>Contact</h1>
            <div className="text-center">
                <div className="social-icons">
                        <a href="https://linkedin.com/in/kaanaydogan" target="_next" className="btn social-icon"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/kaanay03" target="_next" className="btn social-icon"><i className="fab fa-github"></i></a>
                        <a href="mailto:me@kaan.xyz" className="btn social-icon"><i className="fas fa-envelope"></i></a>    
                </div>
                <br />
                <b>Email Addresses:</b>
                <p>
                    me (at) kaan.xyz
                    <br/>
                    kaan (at) umd.edu
                </p>

            </div>
        </div>
    )
}

export default Contact;