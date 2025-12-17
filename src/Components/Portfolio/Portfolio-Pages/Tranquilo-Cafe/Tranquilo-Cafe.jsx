import React from "react";
import { useLocation } from "react-router-dom";
import './Tranquilo-Cafe.css'
import FigmaLogo  from '../../../../assets/Figma-Logo.svg' 
import ReactLogo  from '../../../../assets/React-Green-Logo.svg'
import AdobeLogo  from '../../../../assets/Adobe-Logo.svg'
import TranquiloCafeHero from '../../../../assets/Tranquilo-Cafe-Landing-Page1123.png'


const TranquiloCafeProject = () => {



    return (
        <>
        <div>
           <div className='Intro'>
                                   <div className='Header'><h1>Tranquilo Cafe</h1> <img src={FigmaLogo} alt="" /> <img src={AdobeLogo} alt="" /></div>
                                   <div className="ProjectOverview">
                                                               <h2>Overview:</h2>
                                                               <p>
                                                                Tranquilo Cafe is a cozy and inviting coffee shop located in the heart of the city. The cafe offers a variety of specialty coffees, teas, and pastries in a warm and relaxing atmosphere. The design project involved creating a website to reflect the cafe's tranquil ambiance and commitment to quality.
                                                               </p>
                                                               <h3>My Role:</h3>
                                                                <p>UX/UI Designer / Web Designer</p>
                                   
                                                               <h3>Tools Used:</h3>
                                                               <div className="ToolsUsed">
                                                                   <img src={AdobeLogo} alt="" />
                                                                   <img src={FigmaLogo} alt="" />
                                                               </div>
                                                               <div className="TC-Content">
                                                                    <h2>Deliverables:</h2>
                                                                    <h3>Website Design</h3>
                                                                    <h4>Page Breakdown:</h4>
                                                                    <ul>
                                                                        <li>Home Page: Showcasing the cafe's ambiance, featured drinks, and special offers.
                                                                            <br />
                                                                            <img src={TranquiloCafeHero} alt="" />
                                                                        </li>
                                                                        <li>Tranquilo Shop Page: Displaying the full menu with descriptions and prices.</li>
                                                                        <li>The Tranquilo Vibe Page: Sharing the cafe's story, mission, and values.</li>
                                                                        <li>Contact Page: Providing location, hours, and a contact form for inquiries.</li>
                                                                    </ul>
                                                               </div>
                                    </div>
                               </div>
        </div>
        </>
    )

}

export default TranquiloCafeProject;