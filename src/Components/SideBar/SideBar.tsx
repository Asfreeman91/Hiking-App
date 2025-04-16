import "./SideBar.css"
import { NewHike } from "../../Type";
import { useEffect, useState } from "react";
import { API_URL } from "../../API";
import type { SideBarProps } from "../../Type";

export default function SideBar( { setCards, cards }: SideBarProps) { 
    const [sideBarVisible, setSideBarVisible] = useState(true); {/* state variable for collapsable sidebar defaulted to visible */

    useEffect(() => {
        const asyncFunction = async () => {
        const response = await fetch("https://67f56264913986b16fa4640a.mockapi.io/hikes")
        const data = await response.json()
        setCards(data);
        }
        asyncFunction()
        }, [])

    const addNewCard = async (newHike: NewHike) => {
        try{
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            'content-type':'application/json',
          },
          body: JSON.stringify(newHike),
        });
        if(!response.ok) {
            throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setCards( [...cards, data] ); {/* The cards are set and the new data is added */}
      } catch(error) {
        console.error("There was an error creating a hike:", error);
      }
      }

    {/*State variable that controlls how form info is set. The form is defaulted to blank */}
    const [formInfo, setFormInfo] = useState<Partial<NewHike>>({ 
        name: '',
        location: '',
        miles: '',
        imageUrl: ''
    });

    {/* handleInputChange adds the values from the Input sections of the form  */}
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormInfo((prevData) => ({
            ...prevData, [name]: value,
        }));
    };

    {/* The page is prevented from refreshing when clicking the "Create Hike" button */}
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    const handleButtonClick = () => {  {/* function that toggles visibility of sidebar back and forth */}
        setSideBarVisible(!sideBarVisible)
    };

     const newHike: NewHike = {
        name: formInfo.name ?? '',
        location: formInfo.location ?? '',
        miles: formInfo.miles ?? '',
        imageUrl: formInfo.imageUrl ?? '',
        favorite: false
    };

    return (
        <>
        {sideBarVisible ? (
    <div id="form-div">
    <div id="form-div-2">
    <label style={{border: "1px solid black", width: "100%", textAlign: "center", height: "45px", 
    fontWeight: "bold", padding: "5px", color: "black"}}>Hike Info</label>

    {/* onChange events are passed into each of the input sections and the values are set to what is entered by the user */}
    <form onSubmit={handleSubmit} id="form" name="form" className="d-flex justify-content-center">

    <input style={{margin: "10px", height: "40px", width: "90%", textAlign: "center"}} type="text" placeholder="name" name="name" 
    onChange={handleInputChange}
    value={formInfo.name}/>

    <input style={{margin: "10px", height: "40px", width: "90%", textAlign: "center"}} type="text" placeholder="location" name="location"
    onChange={handleInputChange}
    value={formInfo.location} />

    <input style={{margin: "10px", height: "40px", width: "90%", textAlign: "center"}} type="text" placeholder="miles" name="miles"
    onChange={handleInputChange}
    value={formInfo.miles}/>

    <input style={{margin: "10px", height: "40px", width: "90%", textAlign: "center"}} type="text" placeholder="imageUrl" name="imageUrl"
    onChange={handleInputChange}
    value={formInfo.imageUrl}/>

    </form>
    <button type="submit" 
    onClick={() => {
    addNewCard(newHike);  {/* A new card is created upon clicking the "Create Hike" button and the form is refreshed */}
    setFormInfo({
        name: '',
        location: '',
        miles: '',
        imageUrl: ''
        });
    }}
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
}
