import Footer from "../../Pages/Footer/Footer"
import Gallery from "../../Pages/Gallary/Gallery"
import GoogleMapComponent from "../GoogleMap/GoogleMapComponent"
import HotelBooking from "../HotelBooking/HotelBooking"
import VehicleBooking from "../VehicleBooking/VehicleBooking"

const Group = () => {
    return (
        <div>
            <Gallery />
            <GoogleMapComponent />
            <HotelBooking/>
            <VehicleBooking/>
            <Footer/>
        </div>
    )
}

export default Group
