import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import List from "../List/List";
import SideBar from "../SideBar/SideBar";

export default function App() {  {/* App component contains 4 components */}
  return (
    <div id="app-div" className="d-flex vh-100%"> 
    <Landing/>
    <SideBar/>
    <List/>
    <Footer/>
    </div>
    )
}
