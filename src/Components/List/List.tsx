import HikeCard from "../HikeCard/HikeCard";
import "./List.css"
import { Hike } from "../../Type";
import { API_URL } from "../../API";
import type { ListProps } from "../../Type";

{/* deleteCard and updateCard are passed into List as props and then passed down to HikeCard */}
export default function List({ cards, setCards }: ListProps) { 
      {/* each element in hikes array is mapped and used as a prop for HikeCard by using hike id as a key */}
      

      const deleteCard = async (id: string) => {
        try{
          const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
          });
        if(!response.ok) {
          throw new Error("Network response was not ok.");
        }
        setCards(cards.filter((card) => id !== card.id)); {/* cards are filtered and new array is created when user clicks delete hike button */}
      } catch(error) {
        console.error("There was an error when deleting a hike:", error);
        throw error;
      }
      };

      const updateCard = async (id: string, updatedCard: Partial<Hike>) => {
        try {
          const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
              'content-type':'application/json'
            },
            body: JSON.stringify(updatedCard),
          });
          if (!response.ok) {
            throw new Error("Network response was not ok.");
          }
          const data = await response.json(); {/* Each time a card is updated, the cards are mapped to include the new data */}
          setCards( cards.map(card => (
            card.id !== id ? card : {
              ...cards, ...data
            }
          )) );
        } catch (error) {
          console.error("There was an error when updating a card:", error);
          throw error;
        }
        };

    return (  
        <div id="list-div"> 
        {cards?.map((card) => ( 
         <HikeCard 
         setCards={setCards}
         deleteCard={deleteCard} 
         updateCard={updateCard}
         key={card.id} 
         card={card}/>    
        ))}
        </div> 
        
);
};