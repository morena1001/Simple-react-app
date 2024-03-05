import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import './App.css';
import Services from './components/pages/Services.js';
import Products from './components/pages/Products.js';
import SignUp from './components/pages/SignUp.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/services' Component={Services}/>
          <Route path='/products' Component={Products}/>
          <Route path='/sign-up' Component={SignUp}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
