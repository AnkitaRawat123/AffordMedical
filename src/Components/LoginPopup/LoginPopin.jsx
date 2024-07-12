import React, { useState } from 'react'
import './LoginPopin.css'
import { assets } from '../../assets/assets'

const LoginPopin = ({setShowLogin}) => {
    const [currState, setCurrState]= useState("Login")
  return (
    <div className='login-popin'>
       <form  className="login-popup-container">
            <div className='login-popup-tittle'>
                <h2>{currState}</h2>
                <img  onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt="" />
                
            </div>
            <div className="login-popin-input">
                {currState==="Login"? <> </>:  <input type="text"  placeholder='Your Name' required/>}
               
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button className='create'>{currState==="Sign-Up"?"Create Account":"Login"}</button>
            <div className="login-popin-condition">
                <input type="checkbox" required />
                <p>I agree to the terms of use & privacy policy</p>
            </div>
            {currState==="Login" ?  <p>Create a new account? <span onClick={()=> setCurrState("Sign-Up")}>Click here</span></p>:<p>Already have an account <span onClick={()=> setCurrState("Login")}>Login here</span></p> }
           
            
       </form>
        </div>
  )
}

export default LoginPopin