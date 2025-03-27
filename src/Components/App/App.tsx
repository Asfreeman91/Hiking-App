import { useState } from "react";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import List from "../List/List";
import SideBar from "../SideBar/SideBar";
import { hikes } from "../../data";
import { Hike } from "../../Type";

export default function App() {  {/* App component contains 4 components */}

const [cards, setCards] = useState<Hike[]>(hikes); {/* state variable that re-sets the cards each time a change is made (create, delete, update) */}

{/* addNewCard creates a blank card; passed down to sidebar as a prop */}
const addNewCard = () => {
const blankCard = {
    id: cards.length ? cards[cards.length - 1].id + 1 : 0,
    name: "",
    location: "",
    miles: "",
    imageUrl: "https://png.pngtree.com/element_our/20190530/ourmid/pngtree-white-spot-float-image_1256405.jpg",
    favorite: false
}
setCards( [ ...cards, blankCard ] ) 
}
{/* setCards uses spreader to add a blankCard to the array of cards */}
{/* deleteCard filters cards into a new array that doesn't include id of card deleted; passed down to list as prop */}
const deleteCard = (id: number) => {
  setCards(cards.filter(c => c.id !== id))
}

{/* updateCard maps cards with an updated heart icon; passed down to list as prop */}
const updateCard = (id: number, updatedCard: Partial<Hike>) => {
  setCards((cards) => 
  cards.map((card) => (card.id === id ? { ...card, ...updatedCard } : card))
);
};

  return (
    <div id="app-div" className="d-flex vh-100%"> 
    <Landing/>
    <SideBar addNewCard={addNewCard}/>
    <List 
    cards={cards} 
    deleteCard={deleteCard} 
    updateCard={updateCard}/>
    <Footer/>
    </div>
    )
}
