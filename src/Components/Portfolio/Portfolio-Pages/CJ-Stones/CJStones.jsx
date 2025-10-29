import React from "react";
import { useLocation } from "react-router-dom";
import './CJStones.css'
import AdobeLogo  from '../../../../assets/Adobe-Logo.svg'
import FigmaLogo  from '../../../../assets/Figma-Logo.svg' 
import HTMLLogo  from '../../../../assets/HTML-Logo.svg' 
import CSSLogo  from '../../../../assets/CSS-Logo.svg' 
import JSLogo  from '../../../../assets/JS-Logo.svg' 
import ReactLogo  from '../../../../assets/React-Green-Logo.svg'
import CJStonesBA from '../../../../assets/CJ Stones Before and After.png'
import CJStonesLogo from '../../../../assets/CJStonesLogoArtboards.jpg'
import CJStonesApparelAndDecal from '../../../../assets/TruckBranding.jpg'
import CJStonesApparelAndDecalVideo from '../../../../assets/Decal-Video.mp4'
import CJStonesLogoVideo from '../../../../assets/CJStones-Intro-Outro-Animation.mp4'
import CJStonesSearchFeature from '../../../../assets/Search Feature.png'
import CJStonesSEOChart from '../../../../assets/SEO Chart.png'
import LargeBreadcrumb from '../../../../assets/LargeBreadcrumb.svg'
import EmailIcon from '../../../../assets/Email Icon.svg'
import LinkedInIcon from '../../../../assets/LinkedIn Icon.svg'
import KugeloffProof from '../../../../assets/Kugeloff-Maurice.jpg'
import KugeloffComplete from '../../../../assets/Kugeloff.jpeg'
import KalarchianProof from '../../../../assets/Kalarchian Mardig and Linda Gail.jpg'
import KalarchianComplete from '../../../../assets/Kalarchian.jpg'
import DevirProof from '../../../../assets/Devir-Barbara & Richard.jpg'
import DevirComplete from '../../../../assets/Devir.jpg'


const CJStonesProject = () => {

    function BrandingScroll() {
        const Branding = document.getElementById("Branding");
        Branding.scrollIntoView({behavior: 'smooth'});
        
      }
      
    function WebsiteDesignAndDevelopmentScroll() {
        const WebsiteDesignAndDevelopment = document.getElementById("WebsiteRedesignAndDevelopment");
        WebsiteDesignAndDevelopment.scrollIntoView({behavior: 'smooth'});
      }
      
    function DigitalContentStrategyScroll() {
        const DigitalContentStrategy = document.getElementById("DigitalContentStrategy");
        DigitalContentStrategy.scrollIntoView({behavior: 'smooth'});
      }

      function HeadstoneDesignScroll() {
        const HeadstoneDesign = document.getElementById("HeadstoneDesign");
        HeadstoneDesign.scrollIntoView({behavior: 'smooth'});
      }


    return (
        <>
        
            <a className="WebsiteLink" href="https://cjstones.com" target="_blank" rel="noopener noreferrer">Check Out the Website</a>
            <div className='Intro CJS-Content'>
                <img className="HeaderImage" src={CJStonesBA} alt="" />
                        <div id="CJStonesHeader" className='Header'><h1>CJ Stones</h1> <img src={AdobeLogo} alt="" /> <img src={FigmaLogo} alt="" /> <img src={HTMLLogo} alt="" /><img src={CSSLogo} alt="" /><img src={JSLogo} alt="" /></div>
                        <div className="ProjectOverview">
                            <h2>Overview:</h2>
                            <p>
                                CJ Stones is a full-service monument company that creates custom headstones, provides headstone inscription and maintenance services. I’ve worked with them since 2021 as a Graphic Designer and later led a complete redesign of their website, brand identity, and digital content strategy leading to a drastic increase in site visits and customers. My role combined UX/UI design, front-end development, SEO optimization, and custom scripting for internal tools.
                            </p>
                            <h3>My Role:</h3>
                            <ol>
                                <li className="CJS-Nav-Button" onClick={BrandingScroll}>Branding Redesign</li>
                                <li className="CJS-Nav-Button" onClick={DigitalContentStrategyScroll}>Digital Content Strategist</li>
                                <li className="CJS-Nav-Button" onClick={WebsiteDesignAndDevelopmentScroll}>Website Redesign</li>
                                <li className="CJS-Nav-Button" onClick={WebsiteDesignAndDevelopmentScroll}>Website Development</li>
                                <li className="CJS-Nav-Button" onClick={WebsiteDesignAndDevelopmentScroll}>Website Maintenance and SEO Optimization</li>
                                <li className="CJS-Nav-Button" onClick={HeadstoneDesignScroll}>Headstone Design</li>
                                
                            </ol>

                            <h3>Tools Used:</h3>
                            <div className="ToolsUsed">
                                <img src={AdobeLogo} alt="" />
                                <img src={FigmaLogo} alt="" />
                                <img src={HTMLLogo} alt="" />
                                <img src={CSSLogo} alt="" />
                                <img src={JSLogo} alt="" />
                            </div>
                        </div>

                        <div className="ProjectDeliverables">

                            <h2>Deliverables</h2>
                            <ol>
                                <li>
                                    <h3 id="Branding">New Branding</h3>
                                        <video className="CJStonesLogoVideo" loop muted autoPlay src={CJStonesLogoVideo}></video>
                                        <img src={CJStonesLogo} alt="" className="CJStonesLogo" />
                                        
                                    <h4>Use Cases:</h4>
                                    <ol>
                                        <li>Apparel</li>
                                        <li>Vehicle Decal</li>
                                        <li>Website Branding</li>
                                    </ol>
                                    <div className="UseCaseImages">
                                        <img src={CJStonesApparelAndDecal} alt="" className="CJStonesUseCase" />
                                        <video loop muted autoPlay src={CJStonesApparelAndDecalVideo}></video>
                                    </div>
                                    <p>What started as a personal side project ended up becoming the new brand design for company. I had noticed on our previous website and apparel, there was no identifying factors for the company aside from our name. This made the company seem bland and gave the idea that all they cared about was the work, not the image of the company in the eyes of their potential customers. <br /> <br />

                                    I wanted the new logo to incorporate the idea of a headstone, but also have a modern and sleek look to it. I created a logo that was simple, yet memorable. Since I had in mind that this logo could at some point be used on apparel and other places, I wanted to make it responsive allowing elements to be separated and used in different cases and still maintain the same recognizability. The new logo was then used on all company apparel, vehicle decals, and the new website. This helped to create a cohesive brand image for the company and made it more recognizable to potential customers.
                                    </p>

                                    <h3>The Idea:</h3>
                                    <p>For a logo for this type of business, it essential to portray <b>reliability</b> to the viewer. Headstones for a loved one is an incredibly sensitive subject thus being reliable is important. But what is also necessary is being <b>sensitive to the feelings of the customers</b>. We want them to be able to feel that as well. <br /><br />

                                        With that in mind, I chose a script font for the "CJ" portion of the logo. This gives a more personal and sensitive feel to the logo. The "Stones" portion is in a more modern sans-serif font to give a sense of reliability and professionalism. The combination of the two fonts creates a balance between sensitivity and reliability. <br /><br />

                                        This design strategy was implemented across all branding materials for the company.
                                    </p>
                                </li>

                                <li>
                                    <h3 id="WebsiteRedesignAndDevelopment">Website Redesign & Development</h3>
                                    <img className="CJStonesWebsite" src={CJStonesBA} alt="" />
                                    <h4>Process:</h4>
                                    <p>The previous website was built on a template and had not been updated in years. It had poor SEO, lacked formal website layout and did not accurately represent the company. I started by doing a landing page redesign of the website using Figma. I created a new layout that was modern, clean, and easier to navigate. Showcasing CTA's to increase conversion rate of the site. I also made sure to utlize the CMS that hosts the site to create a mobile responsive experience. <br /><br />

                                    Once the design was complete, I then moved on to the development phase. I rebuilt the landing page within the CMS that was currently being used known as Thryv and gave a refresh to the design of all other pages to create uniformity and improve the On-Page SEO. I also implemented custom scripts to help with quickly navigating the site for specific information.  <br /><br /> </p>

                                    <h4>New Features:</h4>
                                    <ol>
                                        <li>
                                            
                                            <h4>Custom Scripting for Internal Tools</h4>
                                            <img className="SearchPhoto" src={CJStonesSearchFeature} alt="" />
                                            <p>This included a search feature for headstones. Since they have created hundreds of monuments for their customers, there needed to be a way to search the site for specific ones whenever a customer made mention to a specific stone. <br /><br />
                                                
                                                The solution is a lightweight front end Javascript that changes CSS properties based on what is typed into the search bar. At this point in time, it reads the ALT text of each image and changes CSS properties to make the relevant ones visible and the irrelevant ones hidden. This has made it almost effortless to find a stone that a customer mentions over the phone. <br /><br /> 

                                                
                                                </p>
                                                <h5>Technologies Used:</h5>
                                                <p> HTML, CSS, JavaScript</p>
                                                <h5>Challenge:</h5>
                                                <p> The challenge was to create a search feature that was easy to use and could be implemented into the CMS without interfering with the system already set in place. </p>
                                                <h5>Result:</h5>
                                            <p> Various stakeholders expressed <b>increased productivity</b> when dealing with customers thanks to this new feature. </p>
                                                

                                            
                                        </li>
                                        <li>
                                            
                                            <h4>SEO Optimization</h4>
                                            
                                            <p> Worked with company to redevelop the SEO strategy of the site. Beforehand, there was no strategy for SEO and was not even a thought when building the site. Now, SEO is a priority and is regularly cared for. <br /> <br />
                                    
                                            </p>
                                            

                                            <h5>Results:</h5>
                                            <img className="SEOChart" src={CJStonesSEOChart} alt="" />
                                            <p>I began working on the website in 2023 and began focusing on SEO  in January of 2024. Since then, the site has jumped in Organic Traffic from a fluctuating 10-20 hits per month to averaging 100-200 hits per month through Organic SEO. This SEO strategy took some time to see success but through consistent improvement and adjustment, we began to see an increase in engagement in the last 10 months leading to new customers from various places that were not reached before hand. <br /><br /></p>


                                        
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <h3 id="HeadstoneDesign">Headstone Design</h3>
                                    <p> In addition to the website redesign and branding, I also designed custom headstones for the company. I helped design and manufacture <b>hundreds of headstones</b>. This included working with customers to create a design that was unique and personalized to their loved one. I used <b>Adobe Illustrator, Adobe Photoshop and Gerber Omega 7</b> to create the designs and then worked with the production team to ensure that the designs were accurately represented on the final product. <br /><br />
                                        A requirement of the designs was creating what is called a "Proof". This is a to-scale schematic rendering of the stone for approval from the customer. This would ensure that the family knew exactly what they were receiving before we began work on manufacturing the stone. Below are examples of the proofs and design work that was done.</p>
                                <div className="StoneImages">
                                    <img src={KugeloffProof} alt="" />
                                    <img src={KalarchianProof} alt="" />
                                    <img src={DevirProof} alt="" />
                                    <img src={KugeloffComplete} alt="" />
                                    <img src={KalarchianComplete} alt="" />
                                    <img src={DevirComplete} alt="" />
                                </div>
                                
                                </li>
                                <li>
                                    <h3 id="DigitalContentStrategy">Digital Content Strategy (Ongoing Project)</h3>
                                    <p> I worked with the company to develop a digital content strategy that would help to increase engagement on their social media platforms and website, specifically targetting Facebook due to the demographic of their potential customers. This included creating a content calendar, developing a consistent brand voice, and creating engaging content that would resonate with their target audience. <br /><br /> </p>
                                </li>
                            </ol>

                            <h2 className="Conclusion">Thank you for viewing! <br />
                            If you'd like to know more, feel free to contact me below.</h2>
                            <div className="ContactIcons">
                                <a className="Contact-Icon" id="Email" href="mailto:kingsteven1113@gmail.com"><img src={EmailIcon} alt="" />
                                Email <div className="ContactLine"></div></a>
                                <a className="Contact-Icon" id="LinkedIn" href="https://www.linkedin.com/in/stevenkingdesign" target="_blank" rel="noopener noreferrer"><img src={LinkedInIcon} alt="" />LinkedIn <div className="ContactLine"></div></a>
                            </div>
                            
                                  
                        </div>
                    </div>
        
        </>
    )

}

export default CJStonesProject;