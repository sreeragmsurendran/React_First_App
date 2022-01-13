import React from 'react'
import HeroSection from '../HeroSection'
import Prices from '../Prices';
import {homeObjeOne,homeObjThree,homeObjFour,homeObjTwo} from './Data'
function Home() {
    return (
        <>
           <HeroSection {...homeObjeOne} />
           <HeroSection {...homeObjTwo} />
           <HeroSection {...homeObjThree} />
           <Prices/>
           <HeroSection {...homeObjFour} />
           
        </>
    )
}

export default Home;
