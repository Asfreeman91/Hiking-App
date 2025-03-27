import "./HikeCard.css"
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { Hike } from "../../Type";

type HikeCardProps = {
hike: { id: number, name: string, location: string, miles: string, imageUrl: string, favorite: boolean }
deleteCard: (id: number) => void;
updateCard: (id: number, updatedCard: Partial<Hike>) => void;
}

{/* updateCard is passed into onClick for the sidebar button and deleteCard is passed into the delete hike button */}
export default function HikeCard({ hike, deleteCard, updateCard }: HikeCardProps) { {/* hike, updateCard, and deleteCard props destructured */}
    return (
    <div id="hike-card">
    <div className="heart-icon"
        onClick={() => updateCard(hike.id, { favorite: !hike.favorite })} 
    >
        <div>
        {hike.favorite ? <IoHeartSharp /> : <IoHeartOutline />}
        </div>
    </div>
    <div id="hike-card-2" className="card width: 18rem"> {/* hike props are passed into bootstrap card and rendered on HikeCard */}
        <div id="image-div">
        <img id="card-image" src={hike.imageUrl}  
        className="card-img-top" 
        alt={`${hike.name} ${location} ${hike.miles}`}/>
        </div>
        <div className="card-body">
        <h5 className="card-title">{hike.name}</h5>
        <h6 id="card-location">{hike.location}</h6>
        <h6 id="card-miles">{hike.miles} miles</h6>
        <button onClick={() => deleteCard(hike.id)} className="button m-2 btn btn-outline-danger" style={{width: "30%"}}>Delete Hike</button>
        <button className="button m-2 btn btn-outline-primary" style={{width: "30%"}}>Edit Hike</button>
        </div>
    </div>
    </div>
    )
}
