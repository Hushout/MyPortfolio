import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Social from './Social'

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={process.env.PUBLIC_URL + '/images/HeroBckgrnd.jpg'} /> 
      <h1>I Want to build more APP !</h1>
      <p>Here are my CV and Video Presentation :</p>
      <div className='hero-btns'>
        <form method="get" action={process.env.PUBLIC_URL + '/docs/CV-CAO-Anh.pdf'} id="formCv">
        <Button
          type="submit"
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          form="formCv"
        >
          MY CV
        </Button>
        </form>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={alert("Comming soon !")}
        >
          WATCH MY PRESENTATION
        </Button>
        </div>
        <Social /> 
      
    </div>
  );
}

export default HeroSection;