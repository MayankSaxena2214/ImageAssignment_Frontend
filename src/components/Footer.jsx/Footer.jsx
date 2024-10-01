import React from 'react'
import "./Footer.css"
import { SiFacebook, SiGithub, SiInstagram, SiTheboringcompany, SiWhatsapp } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    // <div className="footer-container">
      <div className="footer-elements">
        <div className="footer-upper">
            <div className='footer-logo'><SiTheboringcompany/></div>
            <div className='footer-location'>
              <div>Street-3</div>
              <div>Block-47</div>
              <div>Noida,U.P</div>
              
              <div>India</div>
            </div>
            <div className='footer-services'>
              <div>Development</div>
              <div>Designing</div>
              <div>Testing</div>
              <div>Sales</div>
            </div>
            
            <div className="footer-icons">
  <div className="icon">
    <a href="https://www.instagram.com/mayanksaxena2214" target="_blank" rel="noopener noreferrer">
      <SiInstagram className='insta' />
    </a>
  </div>
  <div className="icon">
    <a href="https://wa.me/9259525543" target="_blank" rel="noopener noreferrer">
      <SiWhatsapp className='whatsapp' />
    </a>
  </div>
  <div className="icon">
    <a href="https://github.com/mayanksaxena2214" target="_blank" rel="noopener noreferrer">
      <SiGithub className='github' />
    </a>
  </div>
  <div className="icon">
    <a href="https://www.facebook.com/mayanksaxena2214" target="_blank" rel="noopener noreferrer">
      <SiFacebook className='facebook' />
    </a>
  </div>
</div>

            
        
            <div className='footer-contact'>
              <div className="footer-contact-icon"><FaPhoneAlt/></div>
              <div className="footer-contact-info">+91 9259525543</div>
              <div className="footer-contact-gmail">mayanksaxena2214@gmail.com</div>
            </div>

        </div>
        {/* <hr style={{color:"white",width:"100%",marginBottom:"10px",color:"black"}} />

      </div> */}
    // </div>
  )
}

export default Footer