import React from "react";
import { useLocation } from "react-router-dom";
import './Art-Cloud.css'
import FigmaLogo  from '../../../../assets/Figma-Logo.svg' 
import ReactLogo  from '../../../../assets/React-Green-Logo.svg'
import AdobeLogo  from '../../../../assets/Adobe-Logo.svg'
import TheLetterA  from '../../../../assets/The-Letter-A-Logo-Watermark2.png'
import TheLetterB  from '../../../../assets/The Letter B Watermark.png'
import TheLetterC  from '../../../../assets/The Letter C Watermark.png'
import TheLetterE  from '../../../../assets/The Letter E Watermark.png'
import TheLetterK  from '../../../../assets/The Letter K Watermark.png'
import TheLetterM  from '../../../../assets/The Letter M Watermark.png'
import TheLetterN  from '../../../../assets/The Letter N Watermark.png'
import TheLetterP  from '../../../../assets/The Letter P Watermark.png'
import TheLetterS from '../../../../assets/The Letter S Logo Watermark.png'
import TheLetterW  from '../../../../assets/The Letter W Watermark.png'
import Sploj from '../../../../assets/Sploj.jpg'
import MontroseBeerNSoda from '../../../../assets/Montrose Beer & Soda-01 (1).png'
import ItzAGoodVibe from '../../../../assets/NewStreamLogo Green.png'
import RSaturley from '../../../../assets/RyanSaturley ITSupport-01 (1).png'
import LPHomeImprovement from '../../../../assets/LP Home Improvement Plus (1).jpg'
import AllSeasonHomeSecurity from '../../../../assets/All Season Home Guardians.png'
import ArchitectVision from '../../../../assets/Architects Vision.png'
import Axis1 from '../../../../assets/Axis.png'
import Axis2 from '../../../../assets/Axis-1.png'
const ArtCloudProject = () => {
    const logos = [
        {src: TheLetterA, alt: 'Logo A'},
        {src: TheLetterB, alt: 'Logo B'},
        {src: TheLetterC, alt: 'Logo C'},
        {src: TheLetterE, alt: 'Logo E'},
        {src: TheLetterK, alt: 'Logo K'},
        {src: TheLetterM, alt: 'Logo M'},
        {src: TheLetterN, alt: 'Logo N'},
        {src: TheLetterP, alt: 'Logo P'},
        {src: TheLetterS, alt: 'Logo S'},
        {src: TheLetterW, alt: 'Logo W'},
        {src: Sploj, alt: 'Sploj Logo'},
        {src: MontroseBeerNSoda, alt: 'Montrose Beer & Soda Logo'},
        {src: ItzAGoodVibe, alt: 'Itz A Good Vibe Logo'},
        {src: RSaturley, alt: 'RSaturley IT Support Logo'},
        {src: LPHomeImprovement, alt: 'LP Home Improvement Logo'},
        {src: AllSeasonHomeSecurity, alt: 'All Season Home Security Logo'},
        {src: ArchitectVision, alt: 'Architect Vision Logo'},
        {src: Axis1, alt: 'Axis Logo 1'},
        {src: Axis2, alt: 'Axis Logo 2'},
    ];

    const [modalOpen, setModalOpen] = React.useState(false);
    const [selected, setSelected] = React.useState({src: '', alt: ''});

    const openModal = (logo) => {
        setSelected(logo);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
        <div>
           <div className='Intro'>
                <div className='Header'><h1>Design Library</h1> <img src={FigmaLogo} alt="" /> <img src={AdobeLogo} alt="" /></div>
                     <h2>
                        The Logo Library is a collection of designs and brand assets that I have created for various clients and personal projects. Each design reflects the unique identity of the brand it represents. <br /><br />
                     </h2>
                 </div>
                 <div className="Logo-Library-Grid">
                    {logos.map((logo, idx) => (
                        <img
                            key={idx}
                            src={logo.src}
                            alt={logo.alt}
                            onClick={() => openModal(logo)}
                            className="LogoItem"
                        />
                    ))}
                 </div>
        </div>

        {modalOpen && (
            <div className="LogoModal" onClick={closeModal}>
                <div className="LogoModalContent" onClick={e => e.stopPropagation()}>
                    <button className="CloseButton" onClick={closeModal}>
                        <p className="CloseX">X</p>
                    </button>
                    <img src={selected.src} alt={selected.alt} />
                </div>
            </div>
        )}
        </>
    )

}

export default ArtCloudProject;