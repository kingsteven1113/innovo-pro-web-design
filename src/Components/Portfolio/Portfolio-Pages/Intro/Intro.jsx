import React from "react";
import { useLocation } from "react-router-dom";
import './Intro.css'
import FigmaLogo  from '../../../../assets/Figma-Logo.svg' 
import ReactLogo  from '../../../../assets/React-Green-Logo.svg'


const Intro = () => {



    return (
        <>
        <div>
            <div className='Intro'>
            <div className='Header'><h1>The Portfolio</h1> <img src={FigmaLogo} alt="" /> <img src={ReactLogo} alt="" /></div>
            <p>Welcome to my full design and development portfolio. 
                I work across Graphic Design, Brand Identity, UX/UI, and Web Design.
    
                Here, you'll find a collection of projects that blend creativity with functionality. I believe great design is more than just how something looks — it's about telling stories, solving real problems, and crafting meaningful digital experiences. Whether it's branding, user interfaces, or visual storytelling, my work is rooted in innovation, clarity, and attention to detail.
    
                Take a look around and explore the projects that reflect my passion for thoughtful, user-focused design.
            </p>
        </div>
        </div>
        </>
    )

}

export default Intro;