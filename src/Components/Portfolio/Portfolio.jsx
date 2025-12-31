import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import CJStonesProject from './Portfolio-Pages/CJ-Stones/CJStones';
import TranquiloCafeProject from './Portfolio-Pages/Tranquilo-Cafe/Tranquilo-Cafe';
import JeFitProject from './Portfolio-Pages/JeFit/JeFit';
import ArtCloudProject from './Portfolio-Pages/Art-Cloud/Art-Cloud';
import Intro from './Portfolio-Pages/Intro/Intro';
import './Portfolio.css';



const Portfolio = () => {
  const [view, setView] = useState('intro');
  const [menuOpen, setMenuOpen] = useState(false);

  const activeLabel = (() => {
    switch (view) {
      case 'cjstones':
        return { title: 'CJ Stones', subtitle: 'Web & Brand Design' };
      case 'tranquilo-cafe':
        return { title: 'Tranquilo Cafe', subtitle: 'Web Design' };
      case 'jefit':
        return { title: 'JeFit', subtitle: 'App UI' };
      case 'art-cloud':
        return { title: 'Art Cloud', subtitle: 'Logo Library / UX' };
      case 'intro':
      default:
        return { title: 'Introduction', subtitle: 'Overview of Me and My Work' };
    }
  })();

  const title = "Steven King - Web Design & Development";

  return (
    <>
    <Helmet><title>{title}</title></Helmet>
  <div className='Portfolio' id='Portfolio'>
    <button
      className={`MenuToggle ${menuOpen ? 'open' : ''}`}
      aria-expanded={menuOpen}
      aria-controls="PortfolioMenu"
      onClick={() => setMenuOpen(prev => !prev)}
    >
      <span className="sr-only">Toggle menu</span>
      <div className="label">
        <h2>{activeLabel.title}</h2>
        <p>{activeLabel.subtitle}</p>
      </div>
    </button>

    <div className={`Menu ${menuOpen ? 'open' : ''}`} id="PortfolioMenu">
        <li onClick={() => { setView('intro'); setMenuOpen(false); }}>
          <h2>Introduction</h2>
          <p> Overview of Me and My Work</p>
        </li>
        
        <li onClick={() => { setView('cjstones'); setMenuOpen(false); }}>
          <h2>CJ Stones</h2>
          <p> Web & Brand Design and Development</p>
        </li>
        <li onClick={() => { setView('tranquilo-cafe'); setMenuOpen(false); }}>
          <h2>Tranquilo Cafe</h2>
          <p> Web Design (Personal Project)</p>
        </li>
        <li onClick={() => { setView('art-cloud'); setMenuOpen(false); }}>
          <h2>Logo Library</h2>
          <p> My Vault of Logos</p>
        </li>
        <li onClick={() => { setView('art-cloud'); setMenuOpen(false); }}>
          <h2>Art Cloud</h2>
          <p> Coming Soon</p>
        </li>
        <li onClick={() => { setView('art-cloud'); setMenuOpen(false); }}>
          <h2>Art Cloud</h2>
          <p> UX/UI Design</p>
        </li>
        <li onClick={() => { setView('art-cloud'); setMenuOpen(false); }}>
          <h2>Art Cloud</h2>
          <p> UX/UI Design</p>
        </li>
          
        
    </div>
    <div className='Content' onClick={() => { if (menuOpen) setMenuOpen(false); }}>
      {view === 'intro' && <Intro />}
      {view === 'cjstones' && <CJStonesProject />}
      {view === 'tranquilo-cafe' && <TranquiloCafeProject />}
      {view === 'jefit' && <JeFitProject />}
      {view === 'art-cloud' && <ArtCloudProject />}
    </div>
    
  </div>
    </>
  );
};

export default Portfolio;