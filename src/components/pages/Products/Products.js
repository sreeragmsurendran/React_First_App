import React from 'react'
import HeroSection from '../HeroSection'
import Prices from '../Prices';
import {homeObjeOne,homeObjThree,homeObjFour,homeObjTwo} from './Data'
function Products() {
    return (
        <>
           <HeroSection {...homeObjFour} />
        </>
    )
}

export default Products;
