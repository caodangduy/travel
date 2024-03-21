import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';
import Ruong from '../img/Ruong.jpg';
import ContactForm from '../components/ContactForm';

function Contact() {    
    return(
        <div>
            <Navbar/>
            <Hero
             cName="hero"
             heroImg={Ruong}
             title="Contact"
             text="Choose Your Favourite Destination."           
             url="/contact"
             buttonText="Travel Plan"
             btnClass="show"
            />
            <ContactForm/>
            
            <Footer/>
        </div>
    );
}
export default Contact;