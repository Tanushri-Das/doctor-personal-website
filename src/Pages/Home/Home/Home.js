import React from 'react'
import UseTitle from '../../../Hooks/UseTitle'
import AboutMine from '../AboutMine/AboutMine'
import OfferMe from '../OfferMe/OfferMe'
import Services from '../Services/Services'
import Slider from '../Slider/Slider'

const Home = () => {

  UseTitle('Home');
  
  return (
    <div>
      <Slider></Slider>
      <AboutMine></AboutMine>
      <Services></Services>
      <OfferMe></OfferMe>
    </div>
  )
}

export default Home