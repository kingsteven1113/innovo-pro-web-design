import React, { useState, useEffect } from "react";
import './Tranquilo-Cafe.css';
import FigmaLogo  from '../../../../assets/Figma-Logo.svg';
import ReactLogo  from '../../../../assets/React-Green-Logo.svg';
import AdobeLogo  from '../../../../assets/Adobe-Logo.svg';
import TranquiloCafeHero from '../../../../assets/Tranquilo-Cafe-Landing-Page1123.png';
import TranquiloCoffee from '../../../../assets/Tranquilo Cafe Coffee.png';
import TranquiloVibe from '../../../../assets/Tranquilo Cafe The Vibe Page.png';
import TranquiloContact from '../../../../assets/Tranquilo Cafe Contact Page.png';
import EmailIcon from '../../../../assets/Email Icon.svg';
import LinkedInIcon from '../../../../assets/LinkedIn Icon.svg';

const TranquiloCafeProject = () => {
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
                <a className="WebsiteLink visible" href="https://www.figma.com/proto/your-link" target="_blank" rel="noopener noreferrer">
                    View Designs
                </a>
            )}

            <div className='Intro TC-Content'>
                <img className="HeaderImage" src={TranquiloCafeHero} alt="" />
                <div id="TranquiloHeader" className='Header'>
                    <h1>Tranquilo Cafe</h1>
                    <img src={FigmaLogo} alt="" />
                    <img src={AdobeLogo} alt="" />
                </div>

                <div className="ProjectOverview">
                    <h2>Overview:</h2>
                    <p>
                        Tranquilo Cafe is a cozy and inviting coffee shop located in the heart of the city. For this personal project I
                        designed and prototyped a responsive website to reflect the cafe’s tranquil ambience, highlight signature drinks,
                        and make it easy for customers to learn the story and get in touch.
                    </p>
                    <h3>My Role:</h3>
                    <p>UX/UI Designer &amp; Web Designer (Personal Project)</p>

                    <h3>Tools Used:</h3>
                    <div className="ToolsUsed">
                        <img src={AdobeLogo} alt="" />
                        <img src={FigmaLogo} alt="" />
                    </div>

                    <h3>Pages:</h3>
                    <ol>
                        <li className="TC-Nav-Button" onClick={HomeScroll}>Home Page</li>
                        <li className="TC-Nav-Button" onClick={MenuScroll}>Menu Page</li>
                        <li className="TC-Nav-Button" onClick={VibeScroll}>The Vibe</li>
                        <li className="TC-Nav-Button" onClick={ContactScroll}>Contact</li>
                    </ol>
                </div>

                <div className="ProjectDeliverables">
                    <h2>Deliverables:</h2>
                    <ol>
                        <li>
                            <h3 id="HomePage">Home Page</h3>
                            <p>
                                The landing page introduces visitors to the Tranquilo brand with a large hero image, a short welcome message,
                                and quick links to the menu and contact information. The goal was to capture the warm, relaxing feeling of
                                sitting in the cafe and make it obvious what makes Tranquilo special.
                            </p>
                            <img src={TranquiloCafeHero} alt="" className="PageImage" />
                        </li>
                        <li>
                            <h3 id="MenuPage">Menu Page</h3>
                            <p>
                                A clean menu layout presents specialty coffees, teas and pastries with descriptions and prices. I organised the
                                items into sections, used consistent typography, and added subtle hover states in the prototype to improve
                                usability.
                            </p>
                            <img src={TranquiloCoffee} alt="" className="PageImage" />
                        </li>
                        <li>
                            <h3 id="VibePage">The Vibe</h3>
                            <p>
                                This page tells the cafe's story, mission, and values. I wanted customers to feel the personality behind the
                                shop and to convey the emphasis on quality, community, and relaxation.
                            </p>
                            <img src={TranquiloVibe} alt="" className="PageImage" />
                        </li>
                        <li>
                            <h3 id="ContactPage">Contact Page</h3>
                            <p>
                                Location, hours, and a contact form are provided so visitors can easily plan their visit or send a message.
                                The prototype includes a map placeholder and clear call‑to‑action buttons.
                            </p>
                            <img src={TranquiloContact} alt="" className="PageImage" />
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
    );
};

export default TranquiloCafeProject;