
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './TheHeadstonePreviewer.css'
import FigmaLogo  from '../../../../assets/Figma-Logo.svg' 
import ReactLogo  from '../../../../assets/React-Green-Logo.svg'
import AdobeLogo  from '../../../../assets/Adobe-Logo.svg';
import HTMLLogo  from '../../../../assets/HTML-Logo.svg' 
import CSSLogo  from '../../../../assets/CSS-Logo.svg' 
import JSLogo  from '../../../../assets/JS-Logo.svg' 

import TheHeadstonePreviewerHero from '../../../../assets/The Headstone Previewer Hero.png';
import TheHeadstonePreviewerLayout from '../../../../assets/The Headstone Previewer Layout.jpeg';
import TranquiloCoffee from '../../../../assets/Tranquilo Cafe Coffee.png';
import TranquiloVibe from '../../../../assets/Tranquilo Cafe The Vibe Page.png';
import TranquiloContact from '../../../../assets/Tranquilo Cafe Contact Page.png';
import EmailIcon from '../../../../assets/Email Icon.svg';
import LinkedInIcon from '../../../../assets/LinkedIn Icon.svg';
import HeadstonePreviewerLogo from '../../../../assets/Headstone Previewer Logo.png';
import HeadstonePreviewerFavicon from '../../../../assets/Headstone Previewer Favicon.png';


const HeadstonePreviewerProject = () => {


    const [showLink, setShowLink] = useState(false);
    
        useEffect(() => {
            const content = document.querySelector('.Content');
            const onScroll = () => {
                const scrolled = content ? content.scrollTop : (window.scrollY || window.pageYOffset || document.documentElement.scrollTop);
                const half = (window.innerHeight || document.documentElement.clientHeight) / 2;
                setShowLink(scrolled > half);
            };
    
            onScroll();
            if (content) {
                content.addEventListener('scroll', onScroll, { passive: true });
            } else {
                window.addEventListener('scroll', onScroll, { passive: true });
            }
            return () => {
                if (content) {
                    content.removeEventListener('scroll', onScroll);
                } else {
                    window.removeEventListener('scroll', onScroll);
                }
            };
        }, []);
    
        // after ten seconds, add a temporary CSS class to the button if it exists
        useEffect(() => {
            const timer = setTimeout(() => {
                // make sure the link is visible in case the user hasn't scrolled yet
                setShowLink(true);
    
                const btn = document.querySelector('.WebsiteLink');
                if (btn) {
                    btn.classList.add('pulse');
                    // remove the class after animation cycles (3s)
                    setTimeout(() => btn.classList.remove('pulse'), 3000);
                }
            }, 10000);
            return () => clearTimeout(timer);
        }, []);
    
        function HomeScroll() {
            const el = document.getElementById("HomePage");
            el && el.scrollIntoView({behavior: 'smooth'});
        }
        function MenuScroll() {
            const el = document.getElementById("MenuPage");
            el && el.scrollIntoView({behavior: 'smooth'});
        }
        function VibeScroll() {
            const el = document.getElementById("VibePage");
            el && el.scrollIntoView({behavior: 'smooth'});
        }
        function ContactScroll() {
            const el = document.getElementById("ContactPage");
            el && el.scrollIntoView({behavior: 'smooth'});
        }


    return (
        <>
         {showLink && (
                        <a className="WebsiteLink visible" href="https://theheadstonepreviewer.netlify.app/" target="_blank" rel="noopener noreferrer">
                            View Website
                        </a>
                    )}
        
                    <div className='Intro TC-Content'>
                        <img className="HeaderImage" src={TheHeadstonePreviewerHero} alt="" />
        
                        <div id="TranquiloHeader" className='Header'>
                            <h1>The Headstone Previewer</h1>
                            <img src={FigmaLogo} alt="" />
                            <img src={AdobeLogo} alt="" />
                            <img src={ReactLogo} alt="" />
                            <img src={HTMLLogo} alt="" />
                            <img src={CSSLogo} alt="" />
                            <img src={JSLogo} alt="" />
                        </div>
        
                        <div className="ProjectOverview">
                            <h2>Overview:</h2>
                            <p>
                                The Headstone Previewer is a web application that allows users to visualize and customize headstone designs for cemeteries. The project was created as a personal design exercise to explore user experience and interface design principles in a unique context. The application features a variety of headstone styles, materials, and engraving options, enabling users to create personalized memorials for their loved ones. The goal was to create an intuitive and respectful platform that helps users navigate the often difficult process of selecting a headstone while providing a meaningful and engaging experience.
                            </p>
                            <h3>My Role:</h3>
                            <p>Front End Developer &amp; Web Designer</p>
        
                            <h3>Tools Used:</h3>
                            <div className="ToolsUsed">
                                <img src={FigmaLogo} alt="" />
                                <img src={AdobeLogo} alt="" />
                                <img src={ReactLogo} alt="" />
                                <img src={HTMLLogo} alt="" />
                                <img src={CSSLogo} alt="" />
                                <img src={JSLogo} alt="" />
                            </div>
        
                            <h3>Pages:</h3>
                            <ol>
                                <li className="TC-Nav-Button" onClick={HomeScroll}>Project Background</li>
                                <li className="TC-Nav-Button" onClick={MenuScroll}>Demo</li>
                                
                            </ol>
                        </div>
        
                        <div className="ProjectDeliverables">
                            <h2>Deliverables:</h2>
                            <ol>
                                <li>
                                    <h3 id="HomePage">Project Background:</h3>
                                    <p>
                                        The Headstone Previewer is a one page web application made to allow users to browse through basic stone categories and options. Allowing them to have a better idea of what options are available to them and come up with an idea of what type of stone they would like to have before ever having an appointment with a Monument Dealer.
                                        <br />
                                        <br />
                                        This was done to allow for users to spend less time on appointments and avoid wasted trips. It also allows users to make decisions about stone at their own pace, not feeling like they are wasting the time of the Monument Dealer.
                                        <br /><br />
                                        The project was made using HTML, CSS, Javascript in the React framework. The design was made in Figma and Adobe Illustrator.
                                       
                                        <br /><br />
                                        Below you can see the layout originally planned and then the executed version of the application.
                                    </p>
                                    <img src={TheHeadstonePreviewerLayout} alt="" className="PageImage" />
                                    <p>
                                        One important feature that you will see in the demo is that the application keeps track of what is selected and has the user send in a form to be contacted to schedule an appointment. The user is not required to fill out the form, but it is there to allow users to easily get in contact with a Monument Dealer after they have made their decisions about what they want.
                                    </p>
                                    <img src={TheHeadstonePreviewerHero} alt="" className="PageImage" />

                                    <p>
                                        The project also called for some minor branding aspects to be developed for polishing and is still a work in progress as any work really is. Below you will see the small design assets made for this as well.
                                    </p>

                                    <div className="HPBrandingAssets">
                                        <img src={HeadstonePreviewerLogo} alt="Headstone Previewer Logo" />
                                        <img src={HeadstonePreviewerFavicon} alt="Headstone Previewer Favicon" />
                                    </div>
                                    
                                </li>
                                <li>
                                    <h3 id="MenuPage">Demonstration:</h3>
                                    <iframe
                                        src="https://theheadstonepreviewer.netlify.app/" // Set the source URL
                                        title="The Headstone Previewer"       // Always add a title for accessibility
                                        width="100%"
                                        height="942.75px"
                                        style={{ border: 'none' }}    // Use inline styles or a CSS file
                                    />
                                </li>
                              
                                
                            </ol>
        
                            <h2 className="Conclusion">
                                Thanks for taking a look! <br />
                                If you’d like to see the live prototype or talk about a project, feel free to contact me below.
                            </h2>
                            <div className="ContactIcons">
                                <a className="Contact-Icon" id="Email" href="mailto:kingsteven1113@gmail.com">
                                    <img src={EmailIcon} alt="" />
                                    Email <div className="ContactLine"></div>
                                </a>
                                <a
                                    className="Contact-Icon"
                                    id="LinkedIn"
                                    href="https://www.linkedin.com/in/stevenkingdesign"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={LinkedInIcon} alt="" />
                                    LinkedIn <div className="ContactLine"></div>
                                </a>
                            </div>
                        </div>
                    </div>
        </>
    )

}

export default HeadstonePreviewerProject;