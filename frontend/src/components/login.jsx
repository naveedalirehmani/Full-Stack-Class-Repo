import React, { useEffect, useState } from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom'
import Toastify from "toastify-js";
import { useDispatch, useStore } from '../store';
import { http, updateToken } from "../http/http";

function LogInPage (props){
    
    const Navigate = useNavigate()
    
    const allUsers = useStore().allUsers
    const dispatch = useDispatch()

    const [userData,setUserData] = useState({
        email:'',
        password:""
    })

        
  const saveLoginInfo = (e) =>{
    let newUser = userData;
    newUser = {...newUser,[e.target.name]:e.target.value}
    setUserData(newUser)
  }
  
    const  loginHandler = async()=>{
        let newUser=userData;
        
        await http
        .post("/auth/login",{
            ...newUser
        })
        .then((res)=>{
            localStorage.setItem("token",res.data.token);
            dispatch({type:"ADD_LOGGINED_USER",payload: res.data.user});
            Navigate("/userProfile");
        })
        .catch((err)=>{
            console.log({err});

        });
       
      

     
        
    }  

    return <div>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">login up</h1>
                    
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" 
                        onChange={(e)=>saveLoginInfo(e)}/>
                        
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" 
                        onChange={(e)=>saveLoginInfo(e)}/>
            
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                        onClick={loginHandler}
                    >Login</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Create an Account 
                    <Link to="/signup">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>

    </div>
}


export default LogInPage;