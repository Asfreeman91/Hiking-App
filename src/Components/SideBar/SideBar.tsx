import "./SideBar.css"
{/* The form will eventually allow the user to create a new hike which should render a new HikeCard. If the user clicks the edit hike button on HikeCard, 
    the info from that card should render in the form and allow the user to edit the info. (This functionality is not working yet) */}

export default function SideBar() { 
    
    return (
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
    <button id="form-button" className= "btn btn-success" style={{ margin: "3px", padding: "4px", outline: "1px solid black", width: "50%",}}>Create Hike</button>
    </div>
    </div>
    )
}