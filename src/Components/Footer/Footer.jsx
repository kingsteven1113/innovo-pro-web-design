import React from "react";
import { useLocation } from "react-router-dom";
import './Footer.css'
import CompanyLogo from '../../assets/IPWD-Logo.svg'

const Footer = () => {

    const CurrentYear = new Date().getFullYear();
    const location = useLocation();

  // Hide footer on the '/portfolio' page as an example
  if (location.pathname === '/portfolio') {
    return null;
  }

    return (
        <>
        <div className="Footer" id="Footer">
            <img src={CompanyLogo} alt="Company Logo which is a geometric logo showing the letters I and P with a gradient of various shades of green." />
            <p>&copy; {CurrentYear} Innovo Pro Web Design All rights Reserved.</p>
        </div>
        </>
    )

}

export default Footer;