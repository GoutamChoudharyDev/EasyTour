import './HotelBooking.css'
import './HotelBookingMQ.css'

// ################## BookingHotels's Data #################### //
const websites = [
    {
        name: "MakeMyTrip",
        url: "https://www.makemytrip.com",
        image: "makemytrip_logo.png",
    },
    {
        name: "Agoda",
        url: "https://www.agoda.com",
        image: "agodaimg.png",
    },
    {
        name: "Trivago",
        url: "https://www.trivago.com",
        image: "trivagoimg.png",
    },
    {
        name: "Booking.com",
        url: "https://www.booking.com",
        image: "bookingimg.png",
    },
    {
        name: "Expedia",
        url: "https://www.expedia.com",
        image: "Expediaimg.png",
    },
    {
        name: "Hotels.com",
        url: "https://www.hotels.com",
        image: "Hotelsimg.png",
    }
];


// ################## BookingHotel Component #################### //
const HotelBooking = () => {
    return (
        <section className="HotelContainer container">
            <div className="HotelSubContainer">
                <h2 className="HotelHeading"><span className='E'>H</span>otel <span className='E'>B</span>ooking</h2>
                <div className="underline1"></div>
            </div>

            <div className="row d-flex justify-content-center alighn-items-center">
                {websites.map((site, index) => (
                    <div key={index} className="Hotelcardparent col-md-4 col-sm-12 d-flex justify-content-center alighn-items-center">
                        <div className="Hotelcard">
                            <a
                                href={site.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={site.image}
                                    alt={site.name}
                                    className="hotel-img"
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
    );
};


export default HotelBooking;
