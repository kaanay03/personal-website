import './Footer.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Footer(){
    useEffect(() => {
        // window.addEventListener('scroll', function() {
        //     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        //        console.log("you're at the bottom of the page");

        //     }
        //  });
    }, [])
    return(
        <div id="footer-container" className="text-center">
            Copyright © 2020 Kaan Aydogan <br />
            <Link id="privacy-link" to="/privacy">Privacy Policy</Link>
        </div>
    )
}

export default Footer;