import { LuMessageCircleCode } from "react-icons/lu";
import { MdNotificationsNone } from "react-icons/md";
import './Navbar.css'

function Navbar(){
    return(
      
      <div className='navbar'>
        <div className="left">
         <h1>Dribbble</h1>
        </div>
        <div className="mid">
          <a href="#">Explore</a>
          <a href="#">Hire a designer</a>
          <a href="#">Find jobs</a>
          <a href="#">Blog</a>
        </div>
        <div className="right">
        <LuMessageCircleCode  size={20}/>
        <MdNotificationsNone  size={25}/>
        <div className="profile">D</div>
        </div>

      </div>
      
    )
  }
  
  export default Navbar;
  