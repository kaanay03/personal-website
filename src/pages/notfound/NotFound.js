import './NotFound.css'
import { Link } from  'react-router-dom';

function NotFound(){
    return(
        <div id="404-content" className="text-center">
            {/* <h1 id="name-heading" className="text-center" style={{'fontSize': '35px'}}>Not Found</h1> */}
            <div className="container home-container mt-5 post-container">
                <div className="text-center">
                    <p style={{"fontSize": "100px"}}>404</p>
                    <h5>The page you are looking for could not be found.</h5>
                    <Link id="home-link" to="/">Back Home</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;