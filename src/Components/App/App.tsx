import { useState } from "react";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import List from "../List/List";
import SideBar from "../SideBar/SideBar";
import { hikes } from "../../data";
import { Hike, NewHike } from "../../Type";

export default function App() {  {/* App component contains 4 components */}

const [cards, setCards] = useState<Hike[]>(hikes); {/* state variable that re-sets the cards each time a change is made (create, delete, update) */}

{/* addNewCard creates a blank card; passed down to sidebar as a prop */}
{/* setCards uses spreader to add a blankCard to the array of cards */}
const addNewCard = (newHike: NewHike) => {
  setCards((prevCards) => [
    ...prevCards,
    { ...newHike, id: (prevCards.length + 1).toString()},
  ]);
};

{/* deleteCard filters cards into a new array that doesn't include id of card deleted; passed down to list as prop */}
const deleteCard = (id: string) => {
  setCards((prevCards) => prevCards.filter((card) => card.id !== id));
};

{/* updateCard maps cards with an updated heart icon; passed down to list as prop */}
const updateCard = (id: string, updatedCard: Partial<Hike>) => {
  setCards((prevCards) => 
  prevCards.map((card) => (card.id === id ? { ...card, ...updatedCard } : card))
);
};

  return (
    <div id="app-div" className="d-flex vh-100%"> 
    <Landing/>
    <SideBar handleAddCard={addNewCard}/>  {/*handleAddCard is passed down to sidebar and allows me to create hikes using the form */}
    <List 
    addNewCard={addNewCard}
    cards={cards} 
    deleteCard={deleteCard} 
    updateCard={updateCard}/>
    <Footer/>
    </div>
    )
}
