import './Header.css';
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="text-center mt-2">
            <Link to="/" className="initials">KA</Link>
        </div>
    );
}

export default Header;