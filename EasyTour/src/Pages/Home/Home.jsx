// Imported Component and files
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css"
import "./HQuery.css"

const Home = () => {
    return (
        <div classNameName="container-fluid">

            {/* Navbar */}
            <header className="HomeNavbar"><Navbar /></header>

            {/* Carousel */}
            <div id="carouselExampleIndicators" className="carousel slide">

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
        </div>
    )
}

export default Home
