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
        {src: TheLetterW, alt: 'Logo W'}
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