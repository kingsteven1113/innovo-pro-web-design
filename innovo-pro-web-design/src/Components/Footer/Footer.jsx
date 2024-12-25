import React from "react";
import './Footer.css'
import CompanyLogo from '../../assets/IPWD-Logo.svg'

const Footer = () => {

    return (
        <>
        <div className="Footer">
            <img src={CompanyLogo} alt="Company Logo which is a geometric logo showing the letters I and P with a gradient of various shades of green." />
        </div>
        </>
    )

}

export default Footer;