import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Footer from './component/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact />
      </Switch>
      <Footer />
    </Router>
      
    </>

     

  );
}

export default App;
