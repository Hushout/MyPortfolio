import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Footer from './component/Footer';
import Contact from "./component/Contact";
import { motion } from "framer-motion";
import HeroSection from './component/HeroSection';

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
      <motion.div className="footer-subscription" initial="hidden" animate="visible" variants={{
        hidden :{
          scale: .8,
          opacity: 0
        },
        visible:{
          scale:1,
          opacity:1,
          transition:{
            delay: .8
          }
        },
      }}>
      <Contact />
      </motion.div>
      </div>
     <Footer />
    </Router>
      
    </>

     

  );
}

export default App;
