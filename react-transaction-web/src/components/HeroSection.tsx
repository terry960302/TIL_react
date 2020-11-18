import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import Button from "./Button"
import "./styles/HeroSection.css"
import AOS from "aos"
import 'aos/dist/aos.css';


interface HeroSectionProps{
    lightBg : any;
    topLine : any;
    lightText : any;
    lightTextDesc : any;
    headline : any;
    description: any;
    buttonLabel : any;
    img : any;
    alt : any;
    imgStart : any;
}

function HeroSection({lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart} : HeroSectionProps) {
    
    useEffect(() => {
       AOS.init()
    }, [])
    
    return (
        <>
            <div  className={lightBg? "home__hero-section" : "home__hero-section darkBg"}>
                <div className="container">
                    <div className="row home__hero-row" style={{display : "flex", flexDirection:imgStart === "start" ? "row-reverse" : "row"}}>
                        <div className="col">
                            <div className="home hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText? "heading" : "heading dark"}>{headline}</h1>
                                <p className={lightTextDesc? "home__hero-subtitle" : "home__hero-subtitle dark"}>{description}</p>
                                <Link to="/sign-up">
                                    <Button buttonSize="btn--wide" buttonColor="blue">{buttonLabel}</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" className="home__hero-img-wrapper">
                                <img src={img} alt={alt} className="home__hero-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

HeroSection.defaultProps = {
    lightBg : null,
    topLine : null,
    lightText : null,
    lightTextDesc : null,
    headline : null,
    description: null,
    buttonLabel : null,
    img : null,
    alt : null,
    imgStart : null,
}

export default HeroSection
