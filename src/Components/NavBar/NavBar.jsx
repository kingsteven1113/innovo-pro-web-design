import React from "react";
import './NavBar.css'
import CompanyLogo from '../../assets/IPWD-Logo.svg'

const NavBar = () => {

    function HeroScroll() {
        const AboutMe = document.getElementById("Hero");
        AboutMe.scrollIntoView(true);
        
        
      }

      function ProcessScroll() {
        const AboutMe = document.getElementById("Process");
        AboutMe.scrollIntoView(true);
        
        
      }

    function AboutScroll() {
        const AboutMe = document.getElementById("About");
        AboutMe.scrollIntoView(true);
        
        
      }
      function ProjectsScroll() {
        const AboutMe = document.getElementById("Projects");
        AboutMe.scrollIntoView(true);
        
       
      
      }
      function PricingScroll() {
        const AboutMe = document.getElementById("Pricing");
        AboutMe.scrollIntoView(true);
        
        
      }

    return (
        <>
        <div className="CenteringNav">
            <div className="NavBar">
                <a className="Logo" onClick={HeroScroll}><img src={CompanyLogo} alt="Company Logo which is a geometric logo showing the letters I and P with a gradient of various shades of green." /></a>
                <div className="CenterNav">
                    <a className="NavItem" onClick={ProcessScroll}>Our Process</a> 
                    <a className="NavItem" onClick={ProjectsScroll}>Projects</a>
                    <a className="NavItem" onClick={AboutScroll}>About</a>
                    <a className="NavItem" onClick={PricingScroll}>Pricing</a>
                </div>
                <a className="CTA" href="mailto:innovoprodesign@gmail.com">Book a Call!</a>
            </div>
        </div>
        </>
    )

}

export default NavBar;