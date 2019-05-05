import React from 'react';
import './App.css';

import Header from './header/Header'
import Intro from './intro/Intro'
import About from './about/About'
import Work from './work/Work'
import Contact from './contact/Contact'

function App() {
  return (
    <>
    <Header />
    <Intro />

    <div style={{height: "100%"}}>

    </div>

    <About />

    <div style={{height: "100%"}}>

    </div>

    <Work />

    <div style={{height: "100%"}}>

    </div>
    
    <Contact />
    </>
  );
}

export default App;
