import Footer from "../Footer/Footer";
import NavBar from "../NavBar/Navbar";
import "./About.css"
import { GiMountaintop } from "react-icons/gi";

export default function About() {

    return(
        <div id="about-page-div">
            <NavBar/>
            <div id="about-image-div"></div>
            <div id="about-heading-div">
               <div id="about-h3">   
                <h3 id="h3-style" style={{fontSize: "50px", marginTop:"60px", fontWeight:"bold", textAlign:"center"}}>About Outdoor Adventures</h3><br />
                </div>
                <h2 id="h2-style" style={{marginLeft: "40px", marginRight: "40px", fontSize:"30px"}}>We believe that it's important to explore and enjoy what nature has to offer, and save memories of your experiences. Whether you're a weekend hiker, seasoned backpacker, or just starting to explore the trails, Outdoor Adventures makes it easy to save, organize, and revisit your favorite hikes. <br /><br />
                Track your journey, save memories, and discover new trails along the way. <GiMountaintop /></h2>
               </div>
            <Footer/>
        </div>
    )
}