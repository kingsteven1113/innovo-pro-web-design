import React from "react";
import { useLocation } from "react-router-dom";
import './Premier-Dental.css'
import FigmaLogo  from '../../../../assets/Figma-Logo.svg' 
import ReactLogo  from '../../../../assets/React-Green-Logo.svg'
import AdobeLogo  from '../../../../assets/Adobe-Logo.svg'
import HTMLLogo  from '../../../../assets/HTML-Logo.svg' 
import CSSLogo  from '../../../../assets/CSS-Logo.svg' 
import JSLogo  from '../../../../assets/JS-Logo.svg' 



const PremierDentalProject = () => {



    return (
        <>
        <div>
           <div className='Intro'>
            <div className='Header'><h1>Premier Dental</h1> <img src={FigmaLogo} alt="" /> <img src={AdobeLogo} alt="" /></div>
            <div className="ProjectOverview">
                    <h2>Overview:</h2>
                    <p>
                    Premier Dental is a modern dental practice focused on providing high-quality, patient-centered care. The website design project aimed to create a professional and welcoming online presence that reflects the practice's commitment to excellence and patient comfort.
                    </p>
                    <h3>My Role:</h3>
                    <p>UX/UI Designer / Web Designer / Web Developer</p>

                    <h3>Tools Used:</h3>
                    <div className="ToolsUsed">
                        <img src={AdobeLogo} alt="" />
                        <img src={FigmaLogo} alt="" />
                        <img src={HTMLLogo} alt="" />
                        <img src={CSSLogo} alt="" />
                        <img src={JSLogo} alt="" />

                    </div>
                    <div className="TC-Content">
                        <h2>Deliverables:</h2>
                        <h3>Website Design</h3>
                        <h4>Page Breakdown:</h4>
                        <ul>
                            <li>Home Page: Showcasing the cafe's ambiance, featured drinks, and special offers.
                                <br />
                                <img src='' alt="" />
                            </li>
                            <li>Tranquilo Shop Page: Displaying the full menu with descriptions and prices. <br />
                            <img src='' alt="" /></li>
                            <li>The Tranquilo Vibe Page: Sharing the cafe's story, mission, and values. <br />
                            <img src='' alt="" /></li>
                            <li>Contact Page: Providing location, hours, and a contact form for inquiries. <br />
                            <img src='' alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default PremierDentalProject;