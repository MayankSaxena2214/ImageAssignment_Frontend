import React from 'react'
import "./About.css"
import about from "../../assets/about.jpeg"
const Aboutus = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={about} alt="" />
      </div>
      <div className="about-content">
        Lorem ipsum dolor sit amet Lorem ipsum, dolorlo similique pariatur. consectetur adipisicing elit. Blanditiis, nesciunt dicta nostrum unde facilis asperiores ratione labore fuga maiores voluptatem adipisci molestias, quisquam, error eveniet dolores. Deleniti quis similique non veritatis quam recusandae maxime quibusdam temporibus natus possimus dolores nam atque repellendus a voluptatibus esse molestias quasi necessitatibus, ratione saepe!
      </div>
    </div>
  )
}

export default Aboutus