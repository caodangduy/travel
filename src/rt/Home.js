import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';
import Ruong from '../img/Ruong.jpg'

function Home() {    
    return(
        <div>
            <Navbar/>
            <Hero
             cName="hero"
             heroImg={Ruong}
             title="Your Journey Your Story"
             text="Choose Your Favourite Destination."
             buttonText="Travel Plan"
             url="/"
             btnClass="show"
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </div>
    );
}
export default Home;