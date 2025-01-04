import React from 'react';
import './LandingPage.css';
import BackgroundTube from '../../assets/BackgroundTubeImage.svg'
import AdobeLogo  from '../../assets/Adobe-Logo.svg'
import FigmaLogo  from '../../assets/Figma-Logo.svg' 
import HTMLLogo  from '../../assets/HTML-Logo.svg' 
import CSSLogo  from '../../assets/CSS-Logo.svg' 
import JSLogo  from '../../assets/JS-Logo.svg' 
import ReactLogo  from '../../assets/React-Green-Logo.svg'
import Computer from '../../assets/Computer.svg'
import HeaderBreadcrumb1 from '../../assets/HeaderBreadcrumb1.svg'
import Discuss from '../../assets/Discuss.svg'
import Diagnose from '../../assets/Diagnose.svg'
import Deploy from '../../assets/Deploy.svg'
import DottedLine from '../../assets/Dotted Line.svg'
import TranquiloCafeThumbnail from '../../assets/Tranquilo Cafe Landing Page.png'
import HeaderBreadcrumb2 from '../../assets/HeaderBreadcrumb2.svg'
import CJStonesThumbnail from '../../assets/CJ Stones Landing Page.png'

const LandingPage = () => {
  return (
    <>
    <section className='HeroSection'>
      <div className='HeroBackgroundImage'>
        <img src={BackgroundTube} alt="" />
      </div>
      <div className='ComputerDesign'>
        <img src={Computer} alt="" />
      </div>
      <div className='HeroSectionGrid'>
        <div className='HeroSectionBox LogoInBox'> <img className='BackgroundLogos' src={FigmaLogo} alt="" /></div>
        <div className='HeroSectionBox'></div>
        <div className='HeroSectionBox'></div>
        <div className='HeroSectionBox'></div>
        <div className='HeroSectionBox LogoInBox'><img className='BackgroundLogos' src={HTMLLogo} alt="" /></div>
        <div className='HeroSectionBox LogoInBox'><img className='BackgroundLogos' src={AdobeLogo} alt="" /></div>
        <div className='HeroSectionBox'></div>
        <div className='HeroSectionBox'></div>
        <div className='HeroSectionBox'></div>
        <div className='HeroSectionBox LogoInBox'><img className='BackgroundLogos' src={JSLogo} alt="" /></div>
        <div className='HeroSectionBox LogoInBox'><img className='BackgroundLogos' src={ReactLogo} alt="" /></div>
        <div className='HeroSectionBox'></div>
        <div className='HeroSectionBox'></div>
        <div className='HeroSectionBox'></div>
        <div className='HeroSectionBox LogoInBox'><img className='BackgroundLogos' src={CSSLogo} alt="" /></div>
      </div>
      <div className='HeroTopLayer'>
      <div className='HeroHeaders'>
        <h3 className='CompanyName'>Innovo Pro Web Design</h3>
        <h1 className='H1'>We Build Websites</h1>
      </div>
      <p className='HeroParagraph'>Helping the world discover you!</p>
      <div className='HeroCTA'><a className='CTA' href="/contact">Book a Call!</a></div>
      </div>
     
    </section>
    <section>
      <div>
        <div className='ProcessSectionHeader'>
          <h2 className='ProcessHeader'>Our Process</h2>
          <img src={HeaderBreadcrumb1} alt="" />
        </div>
        <div className='ProcessDiagram'>
          <div className='Process-Item LogoInBox'>
            <img src={Discuss} alt="" />
            <p>Discuss</p>
          </div>
          <div className='Process-Item LogoInBox'>
            <div className='MultiLogo2'>
              <img src={FigmaLogo} alt="" />
              <img src={AdobeLogo} alt="" />
            </div>
            <p>Design</p>
          </div>
          <div className='Process-Item LogoInBox'>
          <div className='MultiLogo4'>
            <img src={HTMLLogo} alt="" />
            <img src={CSSLogo} alt="" />
            <img src={JSLogo} alt="" />
            <img src={ReactLogo} alt="" />
          </div>
            <p>Develop</p>
          </div>
          <div className='Process-Item LogoInBox'>
            <img src={Diagnose} alt="" />
            <p>Diagnose</p>
          </div>
          <div className='Process-Item LogoInBox'>
            <img src={Deploy} alt="" />
            <p>Deploy</p>
          </div>
        </div>
        <img className='DottedLine' src={DottedLine} alt="" />
        <p className='Process-Paragraph'>We have developed a smooth clean procces from an idea for a website to a fully built website that is ready for the world to experience. You will be a part of the entire process and this process leads to communitcating with us throughout each step so that the end product is something you're happy with and something we can be proud of.</p>
      </div>
    </section>
    <section className='ProjectsSection'>
      <div className='ProjectsHeader'>
        <h2>Projects</h2>
        <img src={HeaderBreadcrumb2} alt="" />
        </div>
      <div className='Project-Item'>
        <h4>Tranquilo Cafe</h4>
        <p>Website Design</p>
        <div className='Project-Content'>
          <a target='_blank' href="https://www.figma.com/proto/ZJs5T32jgPEwwEarpcp0sl/The-Playground?page-id=205%3A1037&node-id=205-1038&p=f&viewport=718%2C467%2C0.14&t=fhdpIm7h5f0wnzg9-1&scaling=min-zoom&content-scaling=fixed">
            <img src={TranquiloCafeThumbnail} alt="" />
          </a>
          <div className='Project-Text'>
            <h5>Our Part?</h5>
            <p>This was a website redesign we did for a budding coffee shop having that was adding its third shop! <br /> <br />
                We designed the site, a new logo and helped create a new branding theme using new fonts and a revised color scheme. <br /> <br />
                Very happy to work with this client.</p>
            
            <br /><a target='_blank' href="https://www.figma.com/proto/ZJs5T32jgPEwwEarpcp0sl/The-Playground?page-id=205%3A1037&node-id=205-1038&p=f&viewport=718%2C467%2C0.14&t=fhdpIm7h5f0wnzg9-1&scaling=min-zoom&content-scaling=fixed" className='CTA'>Check out the Design!</a>
          </div>
        </div>
      </div>




      <div className='Project-Item'>
        <h4>CJ Stones</h4>
        <p>Website Design, Develop and Maintenance</p>
        <div className='Project-Content'>
          <a target='_blank' href="http://www.cjstones.com/">
            <img src={CJStonesThumbnail} alt="" />
          </a>
          <div className='Project-Text'>
            <h5>Our Part?</h5>
            <p>This was a website redesign we did for a growing small business in the New York Area. <br />
                We designed the site, a new logo and helped create a new branding theme using new fonts and a revised color scheme. <br /> <br />
                Very happy to work with this client.</p>
            
            <br /><a target='_blank' href="http://www.cjstones.com/" className='CTA'>Check out the Website!</a>
          </div>
        </div>
      </div>




      <div className='Project-Item'>
        <h4>Premier Dental</h4>
        <p>Website Design and Development</p>
        <div className='Project-Content'>
          <a target='_blank' href="/">
            <img src={TranquiloCafeThumbnail} alt="" />
          </a>
          <div className='Project-Text'>
            <h5>Our Part?</h5>
            <p>This was a website design and development we did for a Local Dentist! <br /> <br />
                We designed the site and helped create a new branding theme using new fonts and a revised color scheme. <br /> <br />
                Very happy to work with this client.</p>
            
            <br /><a target='_blank' href="/" className='CTA'>Check out the Website!</a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LandingPage;