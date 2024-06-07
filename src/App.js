import React, { useState } from 'react';
import './Css/app.css'

import Nav from './Components/nav'
import LeftInfo from './Components/left_info'
import About from './Components/about'
import Know_me from './Components/knowme'
import Footer from './Components/footer'

function App() {

  return (
    <>
      <Nav />
      <LeftInfo />
      <About />
      <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '80%' }}>
        <Know_me />
        <Footer />
      </div>

    </>
  );
}

export default App;
