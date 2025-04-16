import Footer from "../Footer/Footer";
import List from "../List/List";
import SideBar from "../SideBar/SideBar";
import { Hike } from "../../Type";
import NavBar from "../NavBar/Navbar";
import { useState } from "react";
import Landing from "../Landing/Landing";

export default function Root() { 
const [cards, setCards] = useState<Hike[]>( [] ) 

return (
    <div id="app-div" className="d-flex vh-100%"> 
    <NavBar/>
    <Landing/>
    <SideBar
    cards={cards}
    setCards={setCards}
    />  
    <List 
    setCards={setCards}
    cards={cards} 
    />
    <Footer/>
    </div>
    )
}
