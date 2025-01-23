import React from "react";
import { IoIosMenu } from "react-icons/io";
import './NavBar.css'
import CompanyLogo from '../../assets/IPWD-Logo.svg'

const NavBar = () => {

  const OpenMenu = () => {
    const ToggleMenu = document.getElementById("MobileNav");
    if (ToggleMenu.classList.contains("closed")) {
      ToggleMenu.classList.remove("closed");
      
      
      
      
    }
    else {
      ToggleMenu.classList.add("closed");
      ToggleMenu.classList.remove("open");
    }
  }

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

        <div className="CenteringNav">
          <div className="MobileNav">
          <a className="Logo" onClick={HeroScroll}><img src={CompanyLogo} alt="Company Logo which is a geometric logo showing the letters I and P with a gradient of various shades of green." /></a>
          <IoIosMenu onClick={OpenMenu} className="Burger" />
          </div>
          <div id="MobileNav" className="Mobile-Nav-List closed">
            <a className="Mobile-Nav-Item" onClick={ProcessScroll}>Our Process</a> 
            <a className="Mobile-Nav-Item" onClick={ProjectsScroll}>Projects</a>
            <a className="Mobile-Nav-Item" onClick={AboutScroll}>About</a>
            <a className="Mobile-Nav-Item" onClick={PricingScroll}>Pricing</a>
            <a className="Mobile-Nav-Item CTA" href="mailto:innovoprodesign@gmail.com">Book A Call!</a>
          </div>
        </div>
        </>
    )

}

export default NavBar;