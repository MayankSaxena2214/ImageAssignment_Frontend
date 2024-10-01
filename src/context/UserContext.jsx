// import { createContext, useContext, useState } from "react";
// import {toast} from "react-hot-toast"
// import axios from "axios"
// import { server } from "../main";
// const UserContext=createContext();
// export const UserContextProvider=({children})=>{
//     const [user,setUser]=useState([]);
//     const [isAuth,setIsAuth]=useState(false);
//     const [btnLoading,setBtnLoading]=useState(false);
//     async function login(email,password,navigate){
//         setBtnLoading(true);
//         try{
//             console.log("REquest in login functoin")
//             const {data}=await axios.post(`${server}/api/v1/users/login`,{email,password});
//             localStorage.setItem("token",data.token);
//             toast.success(data.message);
//             navigate("/")
//             setIsAuth(true);
//             setUser(data.user);
//             setBtnLoading(false);
//         }
//         catch(error){
//             toast.error(error.response.data.message);
//             setBtnLoading(false);
//             setIsAuth(false);
//             console.log(error);
//         }

//     }
//     return (
//         <UserContext.Provider value={{user,setUser,isAuth,setIsAuth,login,btnLoading}}>
//         {children}
//     </UserContext.Provider>
//     )
// }
// export const UserData=()=>useContext(UserContext);
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { server } from "../main";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Changed initial state to null for user
  const [isAuth, setIsAuth] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [allUsers,setAllUsers]=useState([])

  async function login(email, password, navigate) {
    setBtnLoading(true);
    try {
      console.log("Request in login function");
      const { data } = await axios.post(`${server}/api/v1/users/login`, {
        email,
        password,
      });
      if (data.token) {
        localStorage.setItem("token", data.token);
        toast.success(data.message || "Login successful");
        setUser(data.user);
        setIsAuth(true);
        navigate("/"); // Ensure the navigation happens after setting the states
      } else {
        throw new Error("Login failed: Token missing from response");
      }
    } catch (error) {
      // Safely handling error message
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      toast.error(errorMessage);
      console.error("Login Error: ", error); // Logging error for debugging
      setIsAuth(false);
    } finally {
      setBtnLoading(false); // Reset btnLoading in both success and failure cases
    }
  }
  async function fetchUser(){
      try{
        const {data}=await axios.get(`${server}/api/v1/users/fetchUser`,{
          headers:{
            token:localStorage.getItem("token")
          }
        })
        // console.log(data.user);
        setIsAuth(true);
        setUser(data.user);
      }
      catch(error){
        // toast.error(error.response.data.message);
      }
  }
  async function fetchAllUsers(){
    try{
        const {data}=await axios.get(`${server}/api/v1/users/allusers`);
        setAllUsers(data.users);
        // console.log(data.users);
    }
    catch(error){
      toast.error(error.response.data.message);
    }
  }
  useEffect(()=>{
    fetchUser();
    fetchAllUsers();
  },[]);
  async function register(myform,navigate){
    try{
      const {data}=await axios.post(`${server}/api/v1/users/register`,myform)
      navigate("/login");
      toast.success(data.message);
    }
    catch(error){
      toast.error(error.response.data.message);
    }
  }
  return (
    <UserContext.Provider value={{allUsers,register, user, setUser, isAuth, setIsAuth, login, btnLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
