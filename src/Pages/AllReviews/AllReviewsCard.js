import React from "react";

const AllReviewsCard = ({ reviews }) => {
  const { patient, photoURL, message ,time} = reviews;

  return (
    <div className="card card-side bg-base-100 shadow-xl p-3 mb-4 ml-3 mr-3">
      <figure>
        <img src={photoURL} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Patient Name : {patient}</h2>
        <p className="card-title">Time : {new Date(time).toDateString()}</p>
        <p className="card-title">Review : {message}</p>
      </div>
    </div>
  );
};

export default AllReviewsCard;
