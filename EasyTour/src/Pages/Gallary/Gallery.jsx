import './Gallery.css'
import './GalleryMQ.css'


// ################## Gallery's Data #################### //
const attractions = [
  {
    name: "Khajuraho Temples",
    description: "A UNESCO World Heritage Site known for its intricate sculptures and architecture.",
    image: "Khajuraho_1.png",
  },
  {
    name: "Sanchi Stupa",
    description: "A Buddhist monument and UNESCO World Heritage Site.",
    image: "SanchiStupa.png",
  },
  {
    name: "Bandhavgarh National Park",
    description: "A renowned wildlife sanctuary and tiger reserve.",
    image: "BandhavgarhNationalPark.png",
  },
  {
    name: "Bhimbetka Rock Shelters",
    description: "Ancient rock shelters with prehistoric cave paintings.",
    image: "BhimbetkaRockShelters.png",
  },
  {
    name: "Orchha Fort",
    description: "A historic fort complex with stunning palaces and temples.",
    image: "OrchhaFort.png",
  },
  {
    name: "Ujjain's Mahakaleshwar",
    description: "One of the twelve Jyotirlingas dedicated to Lord Shiva.",
    image: "Ujjain_2.png",
  },
];

// ################## Gallery Component #################### //
const Gallery = () => {
  return (
    <div>
      <div>
        <div className="GalleryContainer container">
          <h2 className="text-center GalleryHeading">virtual tour</h2>
          <div className="row d-flex justify-content-center alighn-items-center">

            {attractions.map((attraction, index) => (
              <div className="ParentCard col d-flex justify-content-center alighn-items-center" key={index}>
                <div className="card">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{attraction.name}</h5>
                    <p className="card-text">{attraction.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
