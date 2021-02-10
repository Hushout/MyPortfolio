import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './component/Footer';
import Contact from "./component/Contact";
import HeroSection from './component/HeroSection';
import About from "./component/About";
import RotateLoader from "react-spinners/RotateLoader";


function App() {
  const [loading, setLoading] = useState(false);

  useState(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <div className="App">
      {
        loading ?
        <div className="LoadingScreen">
          <RotateLoader color={"#F57B23"} loading={loading} size={30} />
        </div>
      :

          <Router>
            <Navbar />
            <Switch>
              <Route path='/' exact />
            </Switch>
            <HeroSection />
            <div className="Big--container">

              <About />
              <img src={process.env.PUBLIC_URL + '/images/me.png'} height="600px" width="400px" />
              <Contact />

            </div>
            <Footer />
          </Router>

      }


      </div>



  );
}

export default App;
