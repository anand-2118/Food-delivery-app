import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../assets/assets'
const LoginPopup = ({setShowLogin}) => {
  const [currState,setCurrState] = useState("login")

  return (
    <div>
        <form action="" className='login-popup'>
         <div className='login-popup-container'>
          <div className='login-popup-title'>
              <h2>{currState}</h2>
              <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}  alt="" />
          </div>
          <div className='login-popup-inputs'>
          {currState==="login"?<></>:<input type="text" placeholder='your name' required />}
            <input type="email" placeholder='email' required />
            <input type="password" placeholder='password' required/>
          </div>
          {currState==="login"?<></>
          :<div className='login-popup-conditions'>
            <input type="checkbox" name="" id="" required />
            <p>By Continuing, I Agree with All the terms and conditions</p>
          </div>}

          <button>{currState==="Sign Up"?"Create Account":"login"}</button>
          
          {
            currState==='login'
            ?<p >don't have an acount! <span onClick={()=>setCurrState("Sign Up")}>Create Account</span></p>
            :<p >Already have Acount! <span onClick={()=>setCurrState("login")}>login</span></p>
          }
          </div>
        </form>
        
    </div>
  )
}

export default LoginPopup