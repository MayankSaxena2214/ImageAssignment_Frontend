import React from 'react'
import "./Account.css"
import { UserData } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const Account = ({user}) => {
  const {setIsAuth,setUser} = UserData();
  const navigate=useNavigate();
  const handleLogout=async()=>{
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser([]);
    navigate("/login");
    toast.success("User Logged successfully");
  }
  return (
    <div className="account-container">
      <div className="account-card">
          <div className="img-section">
              <img src={user.avatar?user.avatar.url:""} alt="Image Loading" />
          </div>
          <div className="info-section">
              <p>Name : {user.name}</p>
              <p>E-Mail : {user.email}</p>
              <p>Id : {user._id}</p>
          </div>
          <div className="logout-btn">
            <button onClick={handleLogout}>Logout</button>
          </div>
      </div>
    </div>
  )
}

export default Account