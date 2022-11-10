import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import AllReviewsCard from "./AllReviewsCard";

const AllReviews = ({ serviceID }) => {
  // const { _id, img, price, title ,description} = myservices;

  const { user } = useContext(AuthContext);
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    fetch(`https://doctor-personal-server-side.vercel.app/reviews/${serviceID}`)
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, [allReviews]);

  return (
    <div>
      {allReviews.length > 0 ? (
        <p className="text-4xl my-12 text-amber-500 font-bold">Total {allReviews.length} Reviews</p>
      ) : (
        <p className="text-4xl my-12 text-amber-500 font-bold">No Reviews yet here</p>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {allReviews.map((reviews) => (
          <AllReviewsCard key={reviews._id} reviews={reviews}></AllReviewsCard>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
