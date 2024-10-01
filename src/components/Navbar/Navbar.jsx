import React from 'react'
import "./Navbar.css"
import { LiaConnectdevelop } from "react-icons/lia";
import {Link} from "react-router-dom"
const Navbar = ({isAuth}) => {
  return (
    <div className="navbar-container">
      <div className="logo"><Link to="/"><LiaConnectdevelop/></Link></div>
      <div className="navbar-navigations">
        <ul>
          <Link to={"/"}><li>Home</li></Link>
          <Link to={"/allusers"}><li>AllUsers</li></Link>
          <Link to={"/aboutus"}><li>Aboutus</li></Link>
          <Link to={"/contact"}><li>Contact</li></Link>
          {
            isAuth?(
              <Link to={"/account"}><li>Account</li></Link>
            ):(
              <Link to={"/login"}><li>Login</li></Link>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar