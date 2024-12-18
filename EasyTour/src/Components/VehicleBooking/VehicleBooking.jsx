import './VehicleBooking.css'
import './VehicleBookingMQ.css'

// ################## VehicleBooking's Data #################### //
const VehicleWebsites = [
    {
        name: "Uber",
        image: "uberimg.png",
        url: "https://www.uber.com",
    },
    {
        name: "Ola Cabs",
        image: "olaimg.png",
        url: "https://www.olacabs.com",
    },
    {
        name: "Zoomcar",
        image: "zoomcarimg.png",
        url: "https://www.zoomcar.com",
    },
    {
        name: "Savaari Car Rentals",
        image: "savaariimg.png",
        url: "https://www.savaari.com",
    },
    {
        name: "MakeMyTrip Car Rentals",
        image: "makemytripimgnew.png",
        url: "https://www.makemytrip.com",
    },
    {
        name: "Goibibo Cars",
        image: "goibiboimg.png",
        url: "https://www.goibibo.com",
    },
]

// ################## VehicleBooking Component #################### //
const VehicleBooking = () => {
    return (
        <div>
            <section className="VehicleContainer container">
            <div className="VehicleSubContainer">
                <h2 className="VehicleHeading"><span className='E'>V</span>ehicle <span className='E'>B</span>ooking</h2>
                <div className="underline"></div>
            </div>

            <div className="row d-flex justify-content-center alighn-items-center">
                {VehicleWebsites.map((site, index) => (
                    <div key={index} className="Vehiclecardparent col-md-4 col-sm-12 d-flex justify-content-center alighn-items-center">
                        <div className="Vehiclecard">
                            <a
                                href={site.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={site.image}
                                    alt={site.name}
                                    className="Vehicle-img"
                                />
                            </a>
                            <div className="cardbody text-center">
                                <h5 className="cardtitle">{site.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </div>
    )
}

export default VehicleBooking
