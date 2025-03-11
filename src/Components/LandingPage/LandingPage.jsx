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
import TranquiloCafeThumbnail from '../../assets/Tranquilo Cafe Landing Page.webp'
import HeaderBreadcrumb2 from '../../assets/HeaderBreadcrumb2.svg'
import CJStonesThumbnail from '../../assets/CJ Stones Landing Page.webp'
import PremierDentalThumbnail from '../../assets/Premier Dental Landing Page.webp'
import InnovoProStoryPhoto from '../../assets/InnovoProStoryPhoto.webp'
import InnovoProStoryBreadcrumb from '../../assets/InnovoProStoryBreadcrumb.svg'
import LargeBreadcrumb from '../../assets/LargeBreadcrumb.svg'
import StayHealthy from '../../assets/StayHealthy.webp'



const OpenJFE = () => {
  const JFE = document.getElementById("JFE");
  const UXE = document.getElementById("UXE");
  const SUXE = document.getElementById("SUXE");
  const Button = document.getElementById('A1');
  if (JFE.classList.contains("JIclosed")) {
    JFE.classList.replace("JIclosed", "JIopen");
    UXE.classList.replace("JIopen","JIclosed");
    SUXE.classList.replace("JIopen","JIclosed");
    Button.classList.add("Focused")
    
    
    
    
  }
  else {
    JFE.classList.replace("JIopen","JIclosed");
    Button.classList.remove('Focused')
    
  }
}

const OpenUXE = () => {
  const JFE = document.getElementById("JFE");
  const UXE = document.getElementById("UXE");
  const SUXE = document.getElementById("SUXE");
  const Button = document.getElementById('A2');
  if (UXE.classList.contains("JIclosed")) {
    UXE.classList.replace("JIclosed", "JIopen");
    JFE.classList.replace("JIopen","JIclosed");
    SUXE.classList.replace("JIopen","JIclosed");
    Button.classList.add("Focused")
    
    
    
  }
  else {
    UXE.classList.replace("JIopen","JIclosed");
    Button.classList.remove("Focused")
    
    
  }
}

const OpenSUXE = () => {
  const JFE = document.getElementById("JFE");
  const UXE = document.getElementById("UXE");
  const SUXE = document.getElementById("SUXE");
  const Button = document.getElementById('A3');
  const A3P = document.getElementById('A3P');
  if (SUXE.classList.contains("JIclosed")) {
    SUXE.classList.replace("JIclosed", "JIopen");
    JFE.classList.replace("JIopen","JIclosed");
    UXE.classList.replace("JIopen","JIclosed");
    Button.classList.add("Focused")
    A3P.classList.add('Border')
    
    
  }
  else {
    SUXE.classList.replace("JIopen","JIclosed");
    Button.classList.remove("Focused");
    A3P.classList.remove('Border');
    
  }
}


const LandingPage = () => {
  return (
    <>
    <section id='Hero' className='HeroSection'>
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
        <div className='HeroSectionBox LogoInBox'><img className='BackgroundLogos' src={HTMLLogo} alt="" /></div><br />
        <div className='HeroSectionBox LogoInBox'><img className='BackgroundLogos' src={AdobeLogo} alt="" /></div>
        <div className='HeroSectionBox'></div>
        <div className='HeroSectionBox'></div>
        <div className='HeroSectionBox'></div>
        <div className='HeroSectionBox LogoInBox'><img className='BackgroundLogos' src={JSLogo} alt="" /></div><br />
        <div className='HeroSectionBox LogoInBox'><img className='BackgroundLogos' src={ReactLogo} alt="" /></div>
        <div className='HeroSectionBox'></div>
        <div className='HeroSectionBox'></div>
        <div className='HeroSectionBox'></div>
        <div className='HeroSectionBox LogoInBox'><img className='BackgroundLogos' src={CSSLogo} alt="" /></div><br />
      </div>
      <div className='HeroTopLayer'>
      <div className='HeroHeaders'>
        <h3 className='CompanyName'>Innovo Pro Web Design</h3>
        <h1 className='H1'>We Build Websites</h1>
      </div>
      <p className='HeroParagraph'>Helping the world discover you!</p>
      <div className='HeroCTA'><a className='CTA' href="mailto:innovoprodesign@gmail.com">Book a Call!</a></div>
      </div>
     
    </section>
    <section id='Process'>
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
    <section id='Projects' className='ProjectsSection'>
      <div className='ProjectsHeader'>
        <h2>Projects</h2>
        <img src={HeaderBreadcrumb2} alt="" />
        </div>
        <p>We pride ourselves on delivering innovative, professional, user-friendly web design solutions.  Whether you're looking for a fresh website redesign or a brand-new digital presence, we work closely with you at every step to ensure your site is visually appealing, functional, and optimized for performance. Browse our projects to see how we bring creativity and technical expertise to life!



</p>

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
                We designed the site, a new logo and helped create a new branding theme using new fonts and a revised color scheme.</p>
            
            <br /><a target='_blank' href="https://www.figma.com/proto/ZJs5T32jgPEwwEarpcp0sl/The-Playground?page-id=205%3A1037&node-id=205-1038&p=f&viewport=718%2C467%2C0.14&t=fhdpIm7h5f0wnzg9-1&scaling=min-zoom&content-scaling=fixed" className='CTA'>Check out the Design!</a>
          </div>
        </div>
      </div>




      <div className='Project-Item'>
        <h4>CJ Stones</h4>
        <p>Website Design, Development and Maintenance</p>
        <div className='Project-Content'>
          <a target='_blank' href="http://www.cjstones.com/">
            <img src={CJStonesThumbnail} alt="" />
          </a>
          <div className='Project-Text'>
            <h5>Our Part?</h5>
            <p>This was a website redesign we did for a growing small business in the New York Area. <br />
                We designed the site, a new logo and helped create a new branding theme using new fonts and a revised color scheme.</p>
            
            <br /><a target='_blank' href="http://www.cjstones.com/" className='CTA'>Check out the Website!</a>
          </div>
        </div>
      </div>




      <div className='Project-Item'>
        <h4>StayHealthy+</h4>
        <p>Website Design and Development</p>
        <div className='Project-Content'>
          <a target='_blank' href="/">
            <img src={StayHealthy} alt="" />
          </a>
          <div className='Project-Text'>
            <h5>Our Part?</h5>
            <p>This was a website design and development we did for a Health Insurance Company! <br /> <br />
                We designed the site and helped create a new branding theme using new fonts and a revised color scheme.</p>
            
            <br /><a target='_blank' href="/" className='CTA'>Check out the Website!</a>
          </div>
        </div>
      </div>




      <section id="Aspirations">
      <div className="Aspirations">
        <div id='accordion' className="AspirationsInformation">
          <div className="AspirationOne">
            <div className="JobTitle">
            <h4>Tranquilo Cafe</h4>
            </div>
            <div className='TimelineButtonContainer'>
              <button id='A1' className='SeeMore' onClick={OpenJFE}>Learn More</button>
            </div>
          </div>
          <div id="JFE" class="JobInfo JIclosed">
            <h5>Tranquilo Cafe</h5>
            <h6 style={{marginTop: "30px"}}>Our Role?</h6>
            <ul className='JobList'>
              <li>Website Design</li>
            </ul>
            <p>This was a website redesign we did for a budding coffee shop having that was adding its third shop! <br /> <br />
            We designed the site, a new logo and helped create a new branding theme using new fonts and a revised color scheme.</p>
            <br />
            <a target='_blank' href="https://www.figma.com/proto/ZJs5T32jgPEwwEarpcp0sl/The-Playground?page-id=205%3A1037&node-id=205-1038&p=f&viewport=718%2C467%2C0.14&t=fhdpIm7h5f0wnzg9-1&scaling=min-zoom&content-scaling=fixed" className='CTA-Alt'>Check out the Website!</a>
          </div>
          <div className="AspirationTwo panel panel-default">
          <div className="JobTitle panel-heading">
            <h4 className='panel-title'>CJ Stones</h4>
            </div>
            <div className='TimelineButtonContainer'>
            <button id='A2' className='SeeMore' onClick={OpenUXE}>Learn More</button>
            </div>
          </div>
          <div id="UXE" class="JobInfo JIclosed">
            <h5>CJ Stones</h5>
          
            <h6 style={{marginTop: "30px"}}>Our Role?</h6>
            <ul className='JobList'>
              <li>Website and Brand Redesign</li>
              <li>Website Development</li>
              <li>Ongoing Site Maintenance</li>
            </ul>
            <p>This was a website redesign we did for a growing small business in the New York Area. <br /> 
              We designed the site, a new logo and helped create a new branding theme using new fonts and a revised color scheme.</p>
              
            <br />
            <a target='_blank' href="http://www.cjstones.com/" className='CTA-Alt'>Check out the Website!</a>
            </div>
          <div id='A3P' className="AspirationThree panel panel-default">
          <div className="JobTitle panel-heading">
            <h4 class="panel-title">StayHealthy+</h4>
            </div>
            <div className='TimelineButtonContainer'>
            <button id='A3' className='SeeMore' onClick={OpenSUXE}>Learn More</button>
            </div>
            
          </div>
          <div id="SUXE" class="JobInfo JIclosed">
            <h5>StayHealthy+</h5>
            <h6>Our Role?</h6>
            <ul className='JobList'>
              <li>Website Design</li>
              <li>Website Development</li>
            </ul>
            <p>This was a website design and development we did for a Insurance Company!<br /><br />

                We designed the site and helped create a new branding theme using new fonts and a revised color scheme.</p>
            <br />
            <a target='_blank' href="https://kingsteven1113.github.io/fecapstoneproject/" className='CTA-Alt'>Check out the Website!</a>
          </div>
        </div>
      </div>
    </section>
    </section>



    <section id='About' className='Innovo-Pro-Story'>
      <img className='StoryPhoto' src={InnovoProStoryPhoto} alt="" />
      <div className='StoryInfo'>
        <img src={InnovoProStoryBreadcrumb} alt="" />
        <h3>The Innovo Pro Story</h3>
        <p>Innovo Pro Web Design was started by Steven King who is a young entrepreneur in the New York Area who looks to use his 7 years of professional design and development experience to support businesses in building their online presence and helping the world discover them. <br /><br />The goal is to provide every client with the personal touch that Innovo Pro brings to deliver a Innovative, Professional and Unique experience not only to our clients but to their customers as well.</p>
        <a className='CTA' href="mailto:innovoprodesign@gmail.com">Book A Call!</a>
      </div>
    </section>

    <section id='Pricing' className='PricingSection'>
      <div className='PricingHeader'>
      <div className='Pricing-Background-Grid'>
        <div className='Pricing-Background-Box HeroSectionBox'></div>
        <div className='Pricing-Background-Box HeroSectionBox'></div>
        <div className='Pricing-Background-Box HeroSectionBox'></div>
        <div className='Pricing-Background-Box HeroSectionBox'></div>
        <div className='Pricing-Background-Box HeroSectionBox'></div>
      </div>
        <h3>Pricing</h3>
        <img src={HeaderBreadcrumb1} alt="" />
      </div>
      <div className='Pricing-Details'>
        <div className='Pricing-Item'>
          <div className='Pricing-Item-Info'>
            <h4>Lump Sum</h4>
            <ul>
              <li>Design & Development</li>
              <li>$25/month Hosting</li>
              <li>$50 fee Per Additional Page After 5</li>
              <li>$50/month Unlimited Edits Add On</li>
            </ul>
          </div>
          <div className='Pricing-Item-Price'>
              <h5>$1000</h5>
              <a className='CTA Pricing-CTA' href="mailto:innovoprodesign@gmail.com">Book A Call!</a>
          </div>
        </div>
        <div className='Pricing-Item'>
          <div className='Pricing-Item-Info'>
            <h4>Monthly</h4>
            <ul>
              <li>Design & Development</li>
              <li>Hosting Included</li>
              <li>$50 fee Per Additional Page After 5</li>
              <li>Unlimited Edits</li>
              <li>Continued Support</li>
              <li>Continued SEO Optimization</li>
            </ul>
          </div>
          <div className='Pricing-Item-Price'>
              <h5>$150/month</h5>
              <a className='CTA Pricing-CTA' href="mailto:innovoprodesign@gmail.com">Book A Call!</a>
          </div>
        </div>
      </div>
    </section>
    <section className='EndingSection'>
      <h3>Lets Work Together</h3>
      <form className='ContactForm' name='Contact-Form' netlify>
        <p>Name</p>
        <input type='text' name='Name' placeholder='Enter Your Name...' required />
        <p>Email</p>
        <input type='email' name='Email' placeholder='Enter Your Email...' required/>
        <p>Phone Number</p>
        <input type='tel' name='Phone' placeholder='Enter Your Phone Number...'required />
        <p>How did you Find Us?</p>
        <input type='text' name='Phone' placeholder='Enter Your Phone Number...'required />
        <p>Brief Description of the Project</p>
        <textarea name='Message' placeholder='Describe what your project consists of...'></textarea>
        <button type='submit' className='CTA'>Submit</button>
      </form>
      <img src={LargeBreadcrumb} alt="" />
    </section>
    </>
  );
};

export default LandingPage;