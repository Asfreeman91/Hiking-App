import "./Landing.css"

export default function Landing() { 
    return (
        <div
         id="landing">
        <h1 className= "display-4" style={{color: "white", textAlign: "center"}}>Outdoor Adventures</h1>
        <div id="anchor-box"> {/* anchor tag allows user to scroll down to list section of page */}
        <a id="anchor" href="#list-div">View Hikes</a>
        </div>
        </div>
    )
}