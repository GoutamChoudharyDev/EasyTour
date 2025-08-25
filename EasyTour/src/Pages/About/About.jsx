import "./About.css";

const About = () => {
  return (
    <div className="about-page container mt-5 mb-5">

      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">About <span className="highlight">Easy Tour</span></h1>
        <p className="text-muted fs-5">
          Your trusted partner in creating unforgettable travel experiences.
        </p>
      </div>

      {/* About Content */}
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6 mb-4">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
            alt="About Easy Tour"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Right Text */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">Who We Are</h2>
          <p className="text-muted">
            At <strong>Easy Tour</strong>, we aim to enhance your travel journey by making
            trip planning simple, exciting, and hassle-free. Whether it’s
            booking hotels, planning itineraries, or exploring new destinations,
            we provide everything in one place.
          </p>

          <h4 className="fw-bold mt-4">Why Choose Us?</h4>
          <ul className="list-unstyled text-muted">
            <li>✔️ Simple & user-friendly platform</li>
            <li>✔️ Hotel & vehicle booking system</li>
            <li>✔️ Google Maps integration</li>
            <li>✔️ Virtual travel experiences</li>
            <li>✔️ Share trips & connect with others</li>
          </ul>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section text-center mt-5 p-4 rounded shadow">
        <h2 className="fw-bold mb-3">Our Mission</h2>
        <p className="fs-5 text-muted">
          To make travel easy, enjoyable, and memorable for everyone by using
          innovative technology and creative solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
