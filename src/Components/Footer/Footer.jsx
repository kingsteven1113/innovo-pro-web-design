import React from "react";
import './Footer.css'
import CompanyLogo from '../../assets/IPWD-Logo.svg'

const Footer = () => {

    const CurrentYear = new Date().getFullYear();

    return (
        <>
        <div className="Footer">
            <img src={CompanyLogo} alt="Company Logo which is a geometric logo showing the letters I and P with a gradient of various shades of green." />
            <p>&copy; {CurrentYear} Innovo Pro Web Design All rights Reserved.</p>
        </div>
        </>
    )

}

export default Footer;