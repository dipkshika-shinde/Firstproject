import "./Footar.css";
import { FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
function Footar(){
    return (
        <div className="container">
            <div className="upper">
            <div className="left1">
                <h3>Dribbble</h3>
            </div>
            <div className="mid1">
                <a href="#">For designers</a>
                <a href="#">Hire talent</a>
                <a href="#">Inspiration</a>
                <a href="#">Advertising</a>
                <a href="#">Blog</a>
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Support</a>
            </div>
            <div className="right1">
            <FaTwitter />
            <ImFacebook2 />
            <IoLogoInstagram />
            <FaPinterest />
            </div>
        </div>
        <div className="lower">
            <div className="lower-left">
                <a href="#">© 2025 Dribbble</a>
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Cookies</a>
            </div>
            <div className="lower-right">
                <a href="#">Jobs</a>
                <a href="#">Designers</a>
                <a href="#">Freelancers</a>
                <a href="#">Tags</a>
                <a href="#">Places</a>
                <a href="#">Resources</a>
            </div>
        </div>
        </div>

        
    )
    
}
export default Footar;