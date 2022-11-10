import { data } from "autoprefixer";
import React, { useContext, useState } from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import AllReviews from "../AllReviews/AllReviews";

const ServiceDetails = () => {

  const { _id, title, img, description, price, After_Surgery_Precaution } =
  useLoaderData();
  const { user,loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = user?.email || 'unregistered';
    const message = form.message.value;
    console.log(name, photoURL, message);

    const review = {
      service: _id,
      serviceName: title,
      price,
      patient: name,email,
      photoURL,
      message,
      time:new Date()
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review Placed Successfully");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };
  if(loading){
    
    return <button className="btn btn-square btn-warning loading"></button>
}
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="card lg:w-10/12 w-4/5 bg-base-100 shadow-xl p-6 mx-auto border-2 mt-10">
        <figure>
          <img className="rounded-lg w-4/5 lg:w-2/3 h-[380px]" src={img} alt="Shoes" />
        </figure>

        <h2 className="text-lg font-bold text-violet-500 mt-5">{title}</h2>
        <h4 className="text-lg text-justify mt-5">{description}</h4>
        <p className="text-lg text-justify mt-4">
          <span className="text-green-500 font-semibold">
            After Lasik Eye Surgery Precaution
          </span>{" "}
          : {After_Surgery_Precaution}
        </p>
        <div className="flex justify-between items-center mt-5">
          <p
            className="font-semibold inline"
            style={{ color: " #FF3811", fontSize: "20px" }}
          >
            Price : ${price}
          </p>
        </div>
      </div>
      <div className="mr-10 p-10">
        <form onSubmit={handleReview}>
          <div>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              className="input input-bordered my-4"
              readOnly
            />
            <img name="photoURL" src={user?.photoURL} className="mx-auto mb-3" alt="" />
            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              className="input input-bordered"
              defaultValue={user?.photoURL}
              hidden
            />
            <input
            type="text" name="email"
            placeholder="Your Email"
            className="input input-ghost input-bordered w-full" required
            defaultValue={user?.email} readOnly
          />
            <textarea
              name="message"
              className="textarea textarea-bordered h-36 my-4 w-full"
              placeholder="Your Review"
              required
            ></textarea>
           
            {user?.email ? (
              <input
                type="submit"
                className="btn btn-outline btn-secondary"
                value="Give Review"
              />
            ) : (
              <Link to='/login' state={{ from: location }} replace>
                <p className="text-xl">Please login to add a review</p>
              </Link>
            )}
          </div>
        </form>
      </div>
     
    </div>
    <AllReviews serviceID={_id}></AllReviews>
    </div>
    
  );
};
//  
export default ServiceDetails;
