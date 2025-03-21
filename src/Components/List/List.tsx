import HikeCard from "../HikeCard/HikeCard";
import "./List.css"
import { hikes } from "../../data";

export default function List() {   {/* each element in hikes array is mapped and used as a prop for HikeCard by using hike id as a key */}
    return (  
        <div id="list-div"> 
        {hikes.map((hike) => ( 
         <HikeCard key={hike.id} hike={hike}/>    
        ))}
        </div> 
        
);
};