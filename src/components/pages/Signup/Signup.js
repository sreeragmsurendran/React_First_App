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
        <form className="form center">
                   <div className="form-inputs">
                       <label htmlFor='username' className='form-label'>
                        <input type="text" name='username' className="form-inputs" placeholder='Username'/>
                        </label>
                   </div>
                   <div className="form-inputs">
                       <label htmlFor='email' className='form-label'>
                        <input type="email" name='email' className="form-inputs" placeholder='Email' />
                        </label>
                   </div>
                   <button className="form-input-btn">  
                    Signup</button>
               </form>
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
