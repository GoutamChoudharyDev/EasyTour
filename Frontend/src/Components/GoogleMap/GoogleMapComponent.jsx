import './GoogleMapComponent.css';

const GoogleMapComponent = () => {
  return (
    <section className='container GoogleMapContainer'>
      <h2 className="text-center GMapHeading"><span className='E'>G</span>oogle <span className='E'>M</span>ap</h2>
      <div className="underline"></div>
      <iframe className='GoogleMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58688.52903362425!2d75.75602062988571!3d23.16899329201336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637469de00ff23%3A0x7f82abdf7899d412!2sUjjain%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1734190751391!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}

export default GoogleMapComponent
