import { useState } from "react"
import "./SideBar.css"

{/* The form will eventually allow the user to create a new hike which should render a new HikeCard. If the user clicks the edit hike button on HikeCard, 
    the info from that card should render in the form and allow the user to edit the info. (This functionality is not working yet) */}

type SideBarProps = {
    addNewCard: () => void  
}

export default function SideBar({ addNewCard }: SideBarProps) { {/* accepting addNewCard function as a prop; passed into create hike button as prop */}

    const [sideBarVisible, setSideBarVisible] = useState(true); {/* state variable for collapsable sidebar defaulted to visible */}

    const handleButtonClick = () => {  {/* function that toggles visibility of sidebar back and forth */}
        setSideBarVisible(!sideBarVisible)
    }
    
    return (
        <>
        {sideBarVisible ? (
    <div id="form-div">
    <div id="form-div-2">
    <label style={{border: "1px solid black", width: "100%", textAlign: "center", height: "45px", 
    fontWeight: "bold", padding: "5px", color: "black"}}>Hike Info</label>
    <form id="form" name="form" className="d-flex justify-content-center">
    <input style={{margin: "10px", height: "40px", width: "90%", textAlign: "center"}} type="text" placeholder="name" />
    <input style={{margin: "10px", height: "40px", width: "90%", textAlign: "center"}} type="text" placeholder="location" />
    <input style={{margin: "10px", height: "40px", width: "90%", textAlign: "center"}} type="text" placeholder="miles"/>
    <input style={{margin: "10px", height: "40px", width: "90%", textAlign: "center"}} type="text" placeholder="image URL"/>
    </form>
    <button onClick={addNewCard}  
    id="form-button" 
    className= "btn btn-success" 
    style={{ margin: "3px", padding: "4px", outline: "1px solid black", width: "50%",}}>Create Hike</button>
    </div>
    </div>
    ) : null}
    <button 
    id="side-bar-button" 
    className="btn btn-light p-1 border" 
    onClick={handleButtonClick}><span>{ sideBarVisible ? "<" : ">" }</span></button> {/* handleButtonClick passed in as prop to sidebar button */}
    </>
    )
}