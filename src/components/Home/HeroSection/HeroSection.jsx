import React from 'react'
import "./HeroSection.css"
import hero from "../../../assets/hero.webp"
import {useNavigate} from "react-router-dom"
const HeroSection = () => {
    const navigate=useNavigate();
  return (
    <div className="hero-container">
        <div className="hero-img">
            <img src={hero} alt="" />
        </div>
        <div className="hero-content">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolores hic praesentium ratione. Eius, temporibus quod, vel corrupti rerum dolores repudiandae facilis amet cumque possimus fugit in? Voluptatibus, nostrum tempora!
                Lorem ipsumentium cupiditate quidem voluptates doloribus quos repellendus vel dolorum doloremque ipsa ipsum totam voluptate molestias natus numquam id, facere nisi.
                <br />
                <button onClick={()=>navigate("/allusers")} className='hero-content-btn'>See All Users</button>
            </p>
        </div>
    </div>
  )
}

export default HeroSection