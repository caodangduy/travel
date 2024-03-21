import TripData from './TripData';
import './TripStyle.css';
import Vhl from '../img/Vhl.png';
import Cave from '../img/Cave.jpg';
import Thac from '../img/Thac.jpg';
import Halong from '../img/Halong.jpg';
import Ruong from '../img/Ruong.jpg';

function Trip(){
    return(
        <div className="trip">
            <h1>Recent trips</h1>
            <p>
                You can discover unique destinations using Googlemaps.
            </p>
            <div className='tripcard'>
                <TripData
                    image={Ruong}
                    heading="Trip In France"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <TripData
                    image={Cave}
                    heading="Trip In France"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <TripData
                    image={Thac}
                    heading="Trip In France"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
            </div>
            
        </div>
    )
}
export default Trip;