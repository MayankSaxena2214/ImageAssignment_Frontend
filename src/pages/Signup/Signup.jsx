import React, { useState } from 'react'
import "./Signup.css"
import {Link, useNavigate} from "react-router-dom"
import { UserData } from '../../context/UserContext';
const Signup = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [avatar,setAvatar]=useState("");
  const [preview,setPreview]=useState("");
  const navigate=useNavigate();
  const {register}=UserData();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const myform=new FormData();
    myform.append("name",name);
    myform.append("email",email);
    myform.append("password",password);
    myform.append("avatar",avatar);
    await register(myform,navigate);
    
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);
      setAvatar(file);
    };
  };

  return (
    <div className="signup-container">
      <div className="signup-elements">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <label  htmlFor="">Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)}  type="text" placeholder='Enter your name' />
          <label htmlFor="">Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter your email' />
          <label htmlFor="">Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Enter your password' />
          
          <label htmlFor="">Upload Profile image</label>
          <input type="file" onChange={handleFileChange} />
          {
            preview && <img src={preview}/>
          }
          <button type='submit'>Signup</button>
          <div className="redirection-login">
            <p>Already Have an Account?</p>
            <Link to={"/login"}><p>Click Here for login</p></Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup