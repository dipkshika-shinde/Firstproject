import './Homepage.css'
import { IoSearch } from "react-icons/io5";


function Homepage(){
    return(
        <div className="homepage">
            <h1>Discover the world’s top designers   </h1>
            <p>Explore work from the most talented and accomplished designers ready to take on your next project</p>
           <div  className="input">
                <input type="text" placeholder='What are you looking for?'/>
                <div className="icon">
                <a href="#">Shots</a>
                <IoSearch  className='search' size={25} />
               
                </div>
            </div>
        </div>
    )
}

export default Homepage;