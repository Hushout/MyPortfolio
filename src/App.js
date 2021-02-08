import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Footer from './component/Footer';
import Contact from "./component/Contact";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact />
      </Switch>
      <div className="footer-subscription">
      <Contact />
      </div>
     
      <Footer />
    </Router>
      
    </>

     

  );
}

export default App;
