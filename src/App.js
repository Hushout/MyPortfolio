import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Footer from './component/Footer';
import Contact from "./component/Contact";
import HeroSection from './component/HeroSection';
import About from "./component/About";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact />
      </Switch>
      <HeroSection />
      <div className="Big--container">
      
      <About />
      <img src={process.env.PUBLIC_URL + '/images/me.png'} height="600px" width="450px"/>
      <Contact />
     
      </div>
     <Footer />
    </Router>
      
    </>

     

  );
}

export default App;
