import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';
import Ruong from '../img/Ruong.jpg';
import AboutUs from '../components/AboutUs';

function Service() {    
    return(
        <div>
            <Navbar/>
            <Hero
             cName="hero"
             heroImg={Ruong}
             title="Service"
             text="Choose Your Favourite Destination."
             buttonText="Travel Plan"
             url="/service"
             btnClass="show"
            />
            <AboutUs/>
            <Trip/>
            <Footer/>
        </div>
    );
}
export default Service;