import React from 'react'
import "./Contact.css"
import {FaSearchLocation,FaInstagram,FaWhatsapp,FaFacebook,FaPhone} from "react-icons/fa"
import {} from "react-icons/ai"
const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="our-location">
          <div className="location-icon"><FaSearchLocation/></div>
          <div className="location-info">Sector-72,Noida</div>
        </div>
        <div className="our-phone">
          <div className="phone-icon"><FaPhone/></div>
          <div className="phone-info">+91 9259525543</div>
        </div>
        <div className="our-socials">
  <div className="insta">
    <a href="https://www.instagram.com/mayanksaxena2214" target="_blank" rel="noopener noreferrer">
      <FaInstagram /> @mayanksaxena2214
    </a>
  </div>
  <div className="facebook">
    <a href="https://www.facebook.com/mayanksaxena2214" target="_blank" rel="noopener noreferrer">
      <FaFacebook /> @Mayank
    </a>
  </div>
  <div className="whatsapp">
    <a href="https://wa.me/919259525543" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp /> +91 9259525543
    </a>
  </div>
</div>

      </div>
      <div className="contact-form">
        <form>
          <h2>Get connected with us</h2>
          <label htmlFor="">Your name</label>
          <input type="text" />
          <label htmlFor="">Your email</label>
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs