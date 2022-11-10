import React from 'react';

import img1 from '../../../assests/banner1.jpg';
import img2 from '../../../assests/banner2.jpg';
import img3 from '../../../assests/banner3.jpg';
import img4 from '../../../assests/banner4.jpg';
import img5 from '../../../assests/banner5.jpg';
import img6 from '../../../assests/banner6.jpg';

import SliderItem from './SliderItem';

const sliderData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: img5,
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: img6,
        prev: 5,
        id: 6,
        next: 1
    }
  ]
const Slider = () => {
    return (
        <div className="carousel w-full py-6">
          {
              sliderData.map(slide => <SliderItem key = {slide.id}
                slide = {slide}>
                
              </SliderItem>)
          }
         
         
        </div>
      );
}

export default Slider