import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne}></HeroSection>
            <HeroSection {...homeObjTwo}></HeroSection>
            <HeroSection {...homeObjThree}></HeroSection>
            <Pricing/>
            <HeroSection {...homeObjFour}></HeroSection>
        </>
    )
}

export default Home
