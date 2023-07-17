import React from 'react'
import UseTitle from '../../../Hooks/UseTitle'
import AboutMine from '../AboutMine/AboutMine'
import OfferMe from '../OfferMe/OfferMe'
import Services from '../Services/Services'
import Slider from '../Slider/Slider';
import FAQ from './FAQ/FAQ'
import Contact from '../Contact/Contact'


const Home = () => {

  UseTitle('Home');

  return (
    <div>
      <Slider></Slider>
      <AboutMine></AboutMine>
      <Services></Services>
      <FAQ/>
      <OfferMe></OfferMe>
      <Contact/>
    </div>
  )
}

export default Home