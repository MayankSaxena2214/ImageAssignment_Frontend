import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home/Home'
import Aboutus from './components/Aboutus/Aboutus'
import Login from './pages/login/Login'
import Signup from './pages/Signup/Signup'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer.jsx/Footer'
import { Toaster } from 'react-hot-toast';
import { UserData } from './context/UserContext'
import Account from './pages/Account/Account'
import AllUsers from './components/AllUsers/AllUsers'
import ContactUs from './components/ContactUs/ContactUs'
const App = () => {
  const {isAuth,user,allUsers}=UserData();
  return (
    <BrowserRouter>
    <Toaster/>

    <Navbar isAuth={isAuth}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/allusers" element={<AllUsers allUsers={allUsers}/>}/>
          <Route path="/login" element={isAuth?<Home/>:<Login/>}/>
          <Route path="/signup" element={isAuth?<Home/>:<Signup/>}/>
          <Route path="/account" element={isAuth?<Account  user={user}/>:<Login/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App