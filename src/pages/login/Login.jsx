import React, { useState } from 'react'
import "./Login.css"
import {Link, useNavigate} from "react-router-dom"
import { UserData } from '../../context/UserContext';
const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const {login,btnLoading,isAuth}=UserData();
  
  const navigate=useNavigate();
  if(isAuth){
    navigate("/")
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await login(email,password,navigate);
  }
  return (
    <div className="login-container">
      <div className="login-components">
        <form onSubmit={handleSubmit}>
        < h2 style={{textAlign:"center"}}>Login</h2>
          <label htmlFor="">Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter your email' />
          <label htmlFor="">Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Enter your password'/>
          <button type='submit' >{btnLoading?"Please Wait":"Login"}</button>
          <div className="redirection">
          <p>Don't have an account?</p><Link to="/signup">Click Here - Register</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;