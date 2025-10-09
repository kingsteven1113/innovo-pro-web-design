import React from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import './NavBar.css'
import CompanyLogo from '../../assets/IPWD-Logo.svg'

const NavBar = () => {

  const OpenMenu = () => {
    const ToggleMenu = document.getElementById("MobileNav");
    const FirstChild = document.getElementById('Mobile-Child1');
    const SecondChild = document.getElementById('Mobile-Child2');
    const ThirdChild = document.getElementById('Mobile-Child3');
    const FourthChild = document.getElementById('Mobile-Child4');
    const FifthChild = document.getElementById('Mobile-Child5');

    if (ToggleMenu.classList.contains("closed")) {
      ToggleMenu.classList.remove("closed");

      FirstChild.classList.add('Mobile-Animation-1');
      SecondChild.classList.add('Mobile-Animation-2');
      ThirdChild.classList.add('Mobile-Animation-3');
      FourthChild.classList.add('Mobile-Animation-4');
      FifthChild.classList.add('Mobile-Animation-5');

      FirstChild.classList.remove('Mobile-Animation-1-Reverse');
      SecondChild.classList.remove('Mobile-Animation-2-Reverse');
      ThirdChild.classList.remove('Mobile-Animation-3-Reverse');
      FourthChild.classList.remove('Mobile-Animation-4-Reverse');
      FifthChild.classList.remove('Mobile-Animation-5-Reverse');
      
    }
    else {
      
      
      

      FirstChild.classList.remove('Mobile-Animation-1');
      SecondChild.classList.remove('Mobile-Animation-2');
      ThirdChild.classList.remove('Mobile-Animation-3');
      FourthChild.classList.remove('Mobile-Animation-4');
      FifthChild.classList.remove('Mobile-Animation-5');

      FirstChild.classList.add('Mobile-Animation-1-Reverse');
      SecondChild.classList.add('Mobile-Animation-2-Reverse');
      ThirdChild.classList.add('Mobile-Animation-3-Reverse');
      FourthChild.classList.add('Mobile-Animation-4-Reverse');
      FifthChild.classList.add('Mobile-Animation-5-Reverse');

      setTimeout(() => {ToggleMenu.classList.add("closed");}, 1750);
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
      function FormScroll() {
        const AboutMe = document.getElementById("Contact");
        AboutMe.scrollIntoView(true);
        
        
      }

    return (
        <>
        <div className="CenteringNav">
            <div className="NavBar">
                <a className="Logo" href="/"><img src={CompanyLogo} alt="Company Logo which is a geometric logo showing the letters I and P with a gradient of various shades of green." /></a>
                <div className="CenterNav">
                    <a className="NavItem" onClick={ProcessScroll}>Our Process</a> 
                    <a className="NavItem" onClick={ProjectsScroll}>Projects</a>
                    <a className="NavItem" onClick={AboutScroll}>About</a>
                    <a className="NavItem" onClick={PricingScroll}>Pricing</a>
                    <Link className="NavItem" to="/portfolio">Portfolio</Link>
                </div>
                <a className="CTA" onClick={FormScroll}>Book a Call!</a>
            </div>
        </div>

        <div className="CenteringNav">
          <div className="MobileNav">
          <a className="Logo" onClick={HeroScroll}><img src={CompanyLogo} alt="Company Logo which is a geometric logo showing the letters I and P with a gradient of various shades of green." /></a>
          <IoIosMenu onClick={OpenMenu} className="Burger" />
          </div>
          <div id="MobileNav" className="Mobile-Nav-List closed">
            <a id="Mobile-Child1" className="Mobile-Nav-Item" onClick={ProcessScroll}>Our Process</a> 
            <a id="Mobile-Child2" className="Mobile-Nav-Item" onClick={ProjectsScroll}>Projects</a>
            <a id="Mobile-Child3" className="Mobile-Nav-Item" onClick={AboutScroll}>About</a>
            <a id="Mobile-Child4" className="Mobile-Nav-Item" onClick={PricingScroll}>Pricing</a>
            <a id="Mobile-Child5" className="Mobile-Nav-Item CTA" onClick={FormScroll}>Book A Call!</a>
          </div>
        </div>
        </>
    )

}

export default NavBar;