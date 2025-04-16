import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/Navbar";
import "./Contact.css"

export default function Contact() {
    return(
        <div id="contact-1">
        <div id="contact-2">
        <NavBar/>
        <div id="contact-header-div">
        <h3 id="contact-header">Contact Us With Any Questions!</h3>
        </div>
        <ContactForm/> 
        <Footer/>
        </div>
        </div>
    )
}