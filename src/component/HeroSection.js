import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Social from './Social'

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={process.env.PUBLIC_URL + '/images/HeroBckgrnd.jpg'} /> 
      <h1>Ready to meet me ?</h1>
      <p>Scroll down else there are direct links if you're not 😊</p>
      <div className='hero-btns'>
        <form method="get" action={process.env.PUBLIC_URL + '/docs/CV_2021-02-08_Anh_Cao.pdf'} id="formCv">
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
          onClick={console.log('hey')}
        >
          WATCH MY PRESENTATION
        </Button>
        </div>
        <Social /> 
      
    </div>
  );
}

export default HeroSection;