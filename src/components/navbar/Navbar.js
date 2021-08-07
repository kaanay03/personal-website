import './Navbar.css';
import { Link } from "react-router-dom";

function HomeNavbar(){
    return(
        <div id="navbar-home">
            <div id="home-nav-container" className="container mb-5">
                <div className="row">
                    <div className="col-md-3 text-center home-nav-col">
                        <Link to="/about" className="home-nav-link">
                            <button type="button" className="home-nav-link-btn">
                                <i className="fas fa-user"></i>
                                <br/>About Me
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-3 text-center home-nav-col">
                        <Link to="/projects" className="home-nav-link">
                            <button type="button" className="home-nav-link-btn">
                                <i className="fas fa-laptop-code"></i>
                                <br/>Projects
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-3 text-center home-nav-col">
                        <Link to="/blog" className="home-nav-link">
                            <button type="button" className="home-nav-link-btn">
                                <i className="fas fa-blog"></i>
                                <br/>Blog
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-3 text-center home-nav-col">
                        <Link to="/contact" className="home-nav-link">
                            <button type="button" className="home-nav-link-btn">
                                <i className="fas fa-envelope"></i>
                                <br/>Contact
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeNavbar;