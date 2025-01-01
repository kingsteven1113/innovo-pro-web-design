import React from "react";
import './NavBar.css'
import CompanyLogo from '../../assets/IPWD-Logo.svg'

const NavBar = () => {

    return (
        <>
        <div className="CenteringNav">
            <div className="NavBar">
                <a className="Logo" href="/"><img src={CompanyLogo} alt="Company Logo which is a geometric logo showing the letters I and P with a gradient of various shades of green." /></a>
                <div className="CenterNav">
                    <a className="NavItem" href="">Our Process</a> {/*Need to figure out a JS Script to allow these buttons to automatically scroll to each section. (Note -> Check the code for the Steven King Design Show website to see how you did it.)*/}
                    <a className="NavItem" href="">Work</a>
                    <a className="NavItem" href="">About</a>
                    <a className="NavItem" href="">Pricing</a>
                </div>
                <a className="CTA" href="/contact">Book a Call!</a>
            </div>
        </div>
        </>
    )

}

export default NavBar;