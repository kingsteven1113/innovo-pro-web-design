import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CJStonesProject from './Portfolio-Pages/CJ-Stones/CJStones';
import TranquiloCafeProject from './Portfolio-Pages/Tranquilo-Cafe/Tranquilo-Cafe';
import JeFitProject from './Portfolio-Pages/JeFit/JeFit';
import ArtCloudProject from './Portfolio-Pages/Art-Cloud/Art-Cloud';
import Intro from './Portfolio-Pages/Intro/Intro';
import './Portfolio.css';



const Portfolio = () => {
  const [view, setView] = useState('intro');

  return (
    <>
  <div className='Portfolio' id='Portfolio'>
    <div className='Menu'>
          <li onClick={() => setView('intro')}>
              <h2>Introduction</h2>
              <p> Overview of Me and My Work</p>
          </li>
        
          <li onClick={() => setView('cjstones')}>
              <h2>CJ Stones</h2>
              <p> Web & Brand Design and Development</p>
          </li>
          <li onClick={() => setView('tranquilo-cafe')}>
              <h2>Tranquilo Cafe</h2>
              <p> Web Design</p>
          </li>
          <li onClick={() => setView('jefit')}>
              <h2>Alberto Guzman Catering</h2>
              <p> Website Design</p>
          </li>
          <li onClick={() => setView('art-cloud')}>
              <h2>Logo Library</h2>
              <p> My Vault of Logos</p>
          </li>
          <li onClick={() => setView('art-cloud')}>
              <h2>Art Cloud</h2>
              <p> Coming Soon</p>
          </li>
          <li onClick={() => setView('art-cloud')}>
              <h2>Art Cloud</h2>
              <p> UX/UI Design</p>
          </li>
          <li onClick={() => setView('art-cloud')}>
              <h2>Art Cloud</h2>
              <p> UX/UI Design</p>
          </li>
          
        
    </div>
    <div className='Content'>
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