import React from 'react'
import HeroSection from '../HeroSection'
import './signup.css'
import {homeObjeOne,homeObjThree,homeObjFour,homeObjTwo} from './Data'
function Signup() {
    return (
        <>
    
        {/* <div className='center'> */}
        <div className='card center'>
        <img className='imgsize' src="images/login_signup2.svg" alt="Avatar"/>
        <div  className='topcard'>
        <form>
                   
                      <div className="signtext">
                          Sign Up
                      </div>
                        <input type="text" name='Firstname' className="form-inputs" placeholder='First Name'/>

                        <input type="text" name='Lastname' className="form-inputs" placeholder='Last Name'/>
                        <input type="email" name='email' className="form-inputs" placeholder='Email' />
                        <input type="number" name='phonenumber' className="form-inputs" placeholder='Phone Number' />
                        <input type="number" name='phonenumber' className="form-inputs" placeholder='Phone Number' />   
                  
                   <button className="form-input-btn">  
                    Signup</button>
                   
               </form>
               </div>
        </div>
]        {/* </div> */}
           
           {/* <div className="form-content-right">
               <form action="" className="form">
                   <div className="form-input">
                       <label htmlFor='username' className='form-label'>
                        <input type="text" name='username' className="form-input" placeholder='Username'/>
                        User Name</label>
                   </div>
                   <div className="form-input">
                       <label htmlFor='email' className='form-label'>
                        <input type="email" name='email' className="form-input" placeholder='Email' />
                        Email</label>
                   </div>
               </form>
           </div> */}
        </>
    )
}

export default Signup;
