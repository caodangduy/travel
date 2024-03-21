import './DestinationStyle.css';
import DestinationData from './DestinationData';
import Vhl from '../img/Vhl.png';
import Cave from '../img/Cave.jpg';
import Thac from '../img/Thac.jpg';
import Halong from '../img/Halong.jpg';

function Destination(){
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tour give your the opotunity to see a lot, within a time frame.</p>

            
            <DestinationData
                className="first-des"
                heading="Taal Volcamo, Batagas"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                img1={Vhl}
                img2={Cave}
            />
            <DestinationData
                className="first-des-reverse"
                heading="Taal Volcamo, Batagas"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                img1={Thac}
                img2={Halong}
            />
        </div>
    );
}
export default Destination;