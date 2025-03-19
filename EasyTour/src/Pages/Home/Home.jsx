// Imported Component and files
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css"
import "./HQuery.css"
import Gallery from "../Gallary/Gallery";
import GoogleMapComponent from "../../Components/GoogleMap/GoogleMapComponent"
import HotelBooking from "../../Components/HotelBooking/HotelBooking"
import VehicleBooking from "../../Components/VehicleBooking/VehicleBooking"
import Footer from "../Footer/Footer"

const Home = () => {
    return (
        <section classNameName="container-fluid">
            {/* Navbar */}
            <header className="HomeNavbar"><Navbar /></header>

            {/* Carousel */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active HomeCarousel">
                        <video src="HomeImg1.mp4" loop autoPlay muted></video>
                    </div>
                    <div className="carousel-item HomeCarousel">
                        <video src="HomeImg2.mp4" loop autoPlay muted></video>
                    </div>
                    <div className="carousel-item HomeCarousel">
                        <video src="HomeImg3.mp4" loop autoPlay muted></video>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <main>
                <Gallery />
                <GoogleMapComponent />
                <HotelBooking />
                <VehicleBooking />
            </main>

            {/* Footer */}
            <footer>
                <Footer />
            </footer>
        </section>
    )
}

export default Home
