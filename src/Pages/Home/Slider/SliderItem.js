import React from "react";
import "./SliderItem.css";

const SliderItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="w-screen h-screen" />
      </div>
      <div className="pt-96">
        <div className="absolute flex justify-end transform -translate-y-1/2 left-32 lg:left-28">
          <h1 className="text-xl lg:text-4xl font-bold text-white text-justify mb-96">
            Special Care & <br />
            and guidence for all <br />
            Eye Diseases
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-32 lg:left-28">
          <p className="text-white mt-24 lg:text-xl text-justify">
            Tanu Eye Care is establishing the next level of eye care.Tanu Eye Care provides the latest solutions for comprehensive screening, diagnostics and monitoring of glaucoma, diabetic retinopathy, and macular degeneration (AMD).I will try to give best treatment to the patient for
            recovering their all Eye Problems.
          </p>
        </div>
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default SliderItem;
