import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import './Intro.css'
import FigmaLogo  from '../../../../assets/Figma-Logo.svg' 
import ReactLogo  from '../../../../assets/React-Green-Logo.svg'
import PersonalPhoto from '../../../../assets/InnovoProStoryPhoto.webp'


const Intro = () => {



    return (
        <>
        <div>
            <div className='Intro'>
            <div className='Header'><h1>Steven King</h1> <img src={FigmaLogo} alt="" /> <img src={ReactLogo} alt="" /></div>
            <div className="Intro-Hero">
                
                <div className="Intro-Text">
                    <h2>Welcome to my Design and Development Portfolio</h2>
                    <p> 
                        I have worked across <b>Graphic Design, Brand Identity, UX/UI, and Web Design and Development</b>.
            
                        Here, you'll find a collection of projects that blend creativity with functionality. I believe great design is more than just how something looks — it's about telling stories, solving real problems, and crafting meaningful digital experiences. Whether it's branding, user interfaces, or visual storytelling, my work is rooted in innovation, clarity, and attention to detail.
            
                        Take a look around and explore the projects that reflect my passion for thoughtful, user-focused design.
                    </p>

                    <h3>Your navigation between projects is on the left. Scroll through! Each project will be shown on the right side.</h3>

                    <br />
                    

                    <h2>And if you plan on hanging around...</h2>
                    <div className="Scroll-Down-Arrow">
                        <FaArrowAltCircleDown size={80} />
                    </div>

                </div>
                <img src={PersonalPhoto} alt="" />
            </div>
            <div className="About-Me-Section">
                <h2>About Me</h2>
                <p>I am Web Designer/Developer growing up in Westchester County, New York. My skills lie in HTML, CSS, JavaScript, React, catering my skills specifically to Website Development. Teaching myself how to code, I work hard to take mine and others' designs and bring them to life.</p>

                <br /><p>I have an educational background in graphic and digital design. Completing a 2 Year Certification course in Computer Graphics in Vocational School in 2019 and attaining a Bachelors in Digital Media and Marketing in 2022, I use my design knowledge to help me create an enjoyable experience for my users. <br /> After college, I took a deep dive into design focusing more on UX/UI Design which led to my introduction to Front End Development. </p>

                <br /><p>My goal is to continue to grow as a designer and developer. I am always looking for new opportunities to learn and grow in the tech industry. Putting my skills to use to improve the experiences of technology. I am excited to see where this journey takes me.</p>
            </div>
        </div>
        </div>
        </>
    )

}

export default Intro;