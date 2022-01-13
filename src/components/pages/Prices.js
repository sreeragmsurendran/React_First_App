import React from 'react'
import { FaFire } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { ImDiamonds } from "react-icons/im";
import { GrDiamond } from "react-icons/gr";
import { IconContext } from 'react-icons/lib';
import './Prices.css';

function Prices() {
    return (
        <IconContext.Provider value={{color:'#fff',size:64}}>
        <div>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing__heading">
                        Pricing
                    </h1>
                    <div className="pricing__container">
                        <Link to="/sign-up" className='pricing__container-card'>
                    <div className="pricing__container-cardInfo">
                        <div className="icon">
                            <FaFire/>
                        </div>
                        <h3>Starter</h3>
                        <h4>$8.99</h4>
                        <p>per month</p>
                        <ul className="ul pricing__container-feature">
                            <li>100 Transaction</li>
                            <li>Cash Back</li>
                            <li>100 Limit</li>

                        </ul>
                        <Button buttonSize='btn--wide' buttonColor='primary'></Button>
                        Choose Plan
                    </div>
                    </Link>

                    <Link to="/sign-up" className='pricing__container-card'>
                    <div className="pricing__container-cardInfo">
                        <div className="icon">
                            <ImDiamonds/>
                        </div>
                        <h3>Gold</h3>
                        <h4>$18.99</h4>
                        <p>per month</p>
                        <ul className="ul pricing__container-feature">
                            <li>1000 Transaction</li>
                            <li>5% Cash Back</li>
                            <li>1000 Limit</li>

                        </ul>
                        <Button buttonSize='btn--wide' buttonColor='primary'></Button>
                        Choose Plan
                    </div>
                    </Link>
                
                    <Link to="/sign-up" className='pricing__container-card'>
                    <div className="pricing__container-cardInfo">
                        <div className="icon">
                            <GrDiamond/>
                        </div>
                        <h3>Diamond</h3>
                        <h4>$28.99</h4>
                        <p>per month</p>
                        <ul className="ul pricing__container-feature">
                            <li>10000 Transaction</li>
                            <li>15% Cash Back</li>
                            <li>10000 Limit</li>

                        </ul>
                        <Button buttonSize='btn--wide' buttonColor='primary'></Button>
                        Choose Plan
                    </div>
                    </Link>

                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Prices
