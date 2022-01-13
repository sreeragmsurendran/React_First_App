import React from 'react'
import HeroSection from '../HeroSection'
import './Login.css'
// import {homeObjeOne,homeObjThree,homeObjFour,homeObjTwo} from './Data'
function Login() {
    return (
        <>
        <div className='card center'>
        <img className='imgsize' src="images/login_signup2.svg" alt="Avatar"/>
        <div  className='topcard'>
        <form>
                   
                      <div className="signtext">
                          Login
                      </div>
                        <input type="text" name='username' className="form-inputs" placeholder='Username'/>

        
                        <input type="email" name='email' className="form-inputs" placeholder='Email' />
        
                   <button className="form-input-btn">  
                    Login</button>
                   
               </form>
               </div>
        </div>
        </>
    )
}

export default Login;
