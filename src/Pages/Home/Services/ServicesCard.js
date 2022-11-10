import React from "react";
import { FaArrowAltCircleRight, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
  const { _id, img, price, title, description } = service;
  return (
    <div>
      <div className="card w-10/12 bg-base-100 shadow-xl p-6">
        <figure>
          <PhotoProvider>
            <PhotoView src={img}>
              <img
                className="rounded-lg max-w-full h-[340px]"
                src={img}
                alt="services"
              />
            </PhotoView>
          </PhotoProvider>
        </figure>

        <h2 className="text-lg font-bold text-violet-500 mt-5">{title}</h2>
        <h4>
          {/* <p>{service.description}</p> */}
          {service.description.length > 100 ? (
            <p>{service.description.slice(0, 100) + "..."}</p>
          ) : (
            <p>{service.description}</p>
          )}
        </h4>
        <div className="flex justify-between items-center mt-5">
          <p
            className="font-semibold inline"
            style={{ color: " #FF3811", fontSize: "20px" }}
          >
            Price : ${price}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/services/${_id}`}>
            <button className="btn btn-outline btn-info">View Details</button>
            </Link>
            
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
