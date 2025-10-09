import React from "react";
import { useLocation } from "react-router-dom";
import './CJStones.css'
import AdobeLogo  from '../../../../assets/Adobe-Logo.svg'
import FigmaLogo  from '../../../../assets/Figma-Logo.svg' 
import HTMLLogo  from '../../../../assets/HTML-Logo.svg' 
import CSSLogo  from '../../../../assets/CSS-Logo.svg' 
import JSLogo  from '../../../../assets/JS-Logo.svg' 
import ReactLogo  from '../../../../assets/React-Green-Logo.svg'
import CJStonesBA from '../../../../assets/CJ Stones Before and After.png'
import CJStonesLogo from '../../../../assets/CJStonesLogoArtboards.jpg'
import CJStonesApparelAndDecal from '../../../../assets/Decal and Apparell.jpg'
import CJStonesApparelAndDecalVideo from '../../../../assets/Decal-Video.mp4'
import CJStonesLogoVideo from '../../../../assets/CJStones-Intro-Outro-Animation.mp4'


const CJStonesProject = () => {



    return (
        <>
        <div>
            <div className='Intro CJS-Content'>
                <img className="HeaderImage" src={CJStonesBA} alt="" />
                        <div id="CJStonesHeader" className='Header'><h1>CJ Stones</h1> <img src={AdobeLogo} alt="" /> <img src={FigmaLogo} alt="" /> <img src={HTMLLogo} alt="" /><img src={CSSLogo} alt="" /><img src={JSLogo} alt="" /></div>
                        <div className="ProjectOverview">
                            <h2>Overview:</h2>
                            <p>
                                CJ Stones is a full-service monument company that creates custom headstones, provides headstone inscription and maintenance services. I’ve worked with them since 2021 as a Graphic Designer and later led a complete redesign of their website, brand identity, and digital content strategy leading to a drastic increase in site visits and customers. My role combined UX/UI design, front-end development, SEO optimization, and custom scripting for internal tools.
                            </p>
                            <h3>My Role:</h3>
                            <ol>
                                <li>Branding Redesign</li>
                                <li>Digital Content Strategist</li>
                                <li>Website Redesign</li>
                                <li>Website Development</li>
                                <li>Website Maintenance and SEO Optimization</li>
                            </ol>

                            <h3>Tools Used:</h3>
                            <div className="ToolsUsed">
                                <img src={AdobeLogo} alt="" />
                                <img src={FigmaLogo} alt="" />
                                <img src={HTMLLogo} alt="" />
                                <img src={CSSLogo} alt="" />
                                <img src={JSLogo} alt="" />
                                <img src={ReactLogo} alt="" />
                            </div>
                        </div>

                        <div className="ProjectDeliverables">

                            <h2>Deliverables</h2>
                            <ol>
                                <li>
                                    <h3>New Branding</h3>
                                        <video className="CJStonesLogoVideo" loop muted autoPlay src={CJStonesLogoVideo}></video>
                                        <img src={CJStonesLogo} alt="" className="CJStonesLogo" />
                                        
                                    <h4>Use Cases:</h4>
                                    <ol>
                                        <li>Apparel</li>
                                        <li>Vehicle Decal</li>
                                        <li>Website Branding</li>
                                    </ol>
                                    <div className="UseCaseImages">
                                        <img src={CJStonesApparelAndDecal} alt="" className="CJStonesUseCase" />
                                        <video loop muted autoPlay src={CJStonesApparelAndDecalVideo}></video>
                                    </div>
                                </li>
                            </ol>

                        </div>
                    </div>
        </div>
        </>
    )

}

export default CJStonesProject;