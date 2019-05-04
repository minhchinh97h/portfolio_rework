import React from 'react';
import './App.css';

import Header from './header/Header'
import Intro from './intro/Intro'
import About from './about/About'
import Work from './work/Work'

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
    </>
  );
}

export default App;
