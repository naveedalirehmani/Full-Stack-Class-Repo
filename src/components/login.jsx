import React, { useEffect, useState } from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom'
import Toastify from "toastify-js";

function LogInPage (props){
    
    const Navigate = useNavigate()
    
    const allUsers = JSON.parse(localStorage.getItem('users'))

    const [userData,setUserData] = useState({
        email:'',
        password:""
    })

        
  const saveLoginInfo = (e) =>{
    let newUser = userData;
    newUser = {...newUser,[e.target.name]:e.target.value}
    setUserData(newUser)
  }
  
    const loginHandler = ()=>{
        const user = allUsers.find(item => {
            return item.email === userData.email && item.password === userData.password
        })

        if(user){
            localStorage.setItem('loggedInUser',JSON.stringify(user))
            Navigate('/userprofile')
        }else{
            Toastify({
                text: "email/password is incorrect",
                duration: 3000,
                close: true,
                style: {
                  background: "linear-gradient(to right, #db0000, #ff9100)",
                },
              }).showToast();
        }
        
    }  

    return <div>
        <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">login up</h1>
                    
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" 
                        onChange={(e)=>saveLoginInfo(e)}/>
                        
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" 
                        onChange={(e)=>saveLoginInfo(e)}/>
            
                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                        onClick={loginHandler}
                    >Login</button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
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