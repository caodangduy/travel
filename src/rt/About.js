import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';
import Ruong from '../img/Ruong.jpg';

function About() {    
    return(
        <div>
            <Navbar/>
            <Hero
             cName="hero"
             heroImg={Ruong}
             title="About"
             text="Choose Your Favourite Destination."
             buttonText="Travel Plan"
             url="/about"
             btnClass="show"
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </div>
    );
}
export default About;