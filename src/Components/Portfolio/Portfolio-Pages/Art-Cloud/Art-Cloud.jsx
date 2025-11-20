import React from "react";
import { useLocation } from "react-router-dom";
import './Art-Cloud.css'
import FigmaLogo  from '../../../../assets/Figma-Logo.svg' 
import ReactLogo  from '../../../../assets/React-Green-Logo.svg'
import AdobeLogo  from '../../../../assets/Adobe-Logo.svg'


const ArtCloudProject = () => {



    return (
        <>
        <div>
           <div className='Intro'>
                <div className='Header'><h1>Logo Library</h1> <img src={FigmaLogo} alt="" /> <img src={AdobeLogo} alt="" /></div>
                     <h2>
                        The Logo Library is a collection of logos and brand assets that I have designed for various clients and personal projects. Each logo is crafted to reflect the unique identity and values of the brand it represents. <br /><br />
                     </h2>
                 </div>
                 <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                 </div>
        </div>
        </>
    )

}

export default ArtCloudProject;