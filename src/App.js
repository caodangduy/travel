import './App.css';
import './Style.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import Home from './rt/Home';
import About from './rt/About';
import Contact from './rt/Contact';
import Service from './rt/Service';

function App() {
  return (

      <Router>
        <>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/about"  element={<About/>} />
            <Route path="/contact"  element={<Contact/>} />
            <Route path="/service"  element={<Service/>} />
          </Routes>
          
        </>
      </Router>
  );
}

export default App;
