import "./HikeCard.css"
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { useEffect } from "react";
import type { HikeCardProps } from "../../Type";

{/* updateCard is passed into onClick for the sidebar button and deleteCard is passed into the delete hike button */}
export default function HikeCard({ 
    setCards, card, deleteCard, updateCard }: HikeCardProps) { {/* hike, updateCard, and deleteCard props destructured */}

    useEffect(() => { 
        const asyncFunction = async () => {
        const response = await fetch("https://67f56264913986b16fa4640a.mockapi.io/hikes")
        const data = await response.json()
        setCards(data);
        }
        asyncFunction()
        }, [])

    return (
    <div id="hike-card">
    <div className="heart-icon"
        onClick={() => updateCard(card.id, { favorite: !card.favorite })} 
    >
        <div>
        {card.favorite ? <IoHeartSharp /> : <IoHeartOutline />}  {/* cards can be toggled as favorite using a heart or the favorite hike button */}
        </div>
    </div>
    <div id="hike-card-2" className="card width: 18rem"> {/* hike props are passed into bootstrap card and rendered on HikeCard */}
        <div id="image-div">
        <img id="card-image" src={card.imageUrl}  
        className="card-img-top" 
        alt={`${card.name} ${location} ${card.miles}`}/>
        </div>
        <div className="card-body">
        <h5 className="card-title">{card.name}</h5>
        <h6 id="card-location">{card.location}</h6>
        <h6 id="card-miles">{card.miles} miles</h6>
        <button onClick={() => deleteCard(card.id)} className="button m-2 btn btn-outline-danger" style={{width: "30%"}}>Delete Hike</button>
        <button 
        onClick={() => updateCard(card.id, { favorite: !card.favorite })}
        className="button m-2 btn btn-outline-primary" 
        style={{width: "30%"}}>Favorite Hike</button>
        </div>
    </div>
    </div>
    )



}
