import React from 'react';
import './LandingPage.css'; 

const LandingPage = () => {
  return (
    <>
    <div className='HeroSection'>
      <div className='HeroTopLayer'>
      <div className='HeroHeaders'>
        <h3 className='CompanyName'>Innovo Pro Web Design</h3>
        <h1 className='H1'>We Build Websites</h1>
      </div>
      <p className='HeroParagraph'>Helping the world discover you!</p>
      <a className='CTA' href="/contact">Book a Call!</a>
      </div>
    </div>
    </>
  );
};

export default LandingPage;