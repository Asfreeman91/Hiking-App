import HikeCard from "../HikeCard/HikeCard";
import "./List.css"
import { Hike } from "../../Type";

type ListProps = {
cards: Hike[];
addNewCard: (newHike: Hike) => void
deleteCard: (id: string) => void
updateCard: (id: string, updatedCard: Partial<Hike>) => void
}

{/* deleteCard and updateCard are passed into List as props and then passed down to HikeCard */}
export default function List({ cards, deleteCard, updateCard }: ListProps) {   {/* each element in hikes array is mapped and used as a prop for HikeCard by using hike id as a key */}
    return (  
        <div id="list-div"> 
        {cards?.map((card) => ( 
         <HikeCard 
         deleteCard={deleteCard} 
         updateCard={updateCard}
         key={card.id} 
         card={card}/>    
        ))}
        </div> 
        
);
};