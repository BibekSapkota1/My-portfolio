import logo from './logo.svg';
import './index.css';
import Background from './assets/images/background.png';
import LeftRectangle from './assets/icons/Rectangle 3.svg';
import RightRectangle from './assets/icons/Rectangle 2.svg';
import FaReact from './assets/icons/FaReact.svg'
import Rocket from './assets/icons/IoMdRocket.svg'
import Gem from './assets/icons/FaGem.svg'
import Group from './assets/images/Group 6.png'
import Backgroun2 from './assets/images/background-2.png'
import Profile from './assets/images/Main.png'
import circlearrow from './assets/icons/Conatctbelow.svg'
import circles from './assets/icons/small-circle.svg'
import rimage from './assets/icons/r-element.svg'

import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import { useState, useEffect } from 'react';
import React from 'react';







function App() {

  


  return (
    <div>
     
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      
    </div>
    
    
    




  );
}

export default App;
