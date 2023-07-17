import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import UseTitle from "../../Hooks/UseTitle";
import OwnReview from "../OwnReview/OwnReview";
import { toast } from "react-toastify";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  UseTitle("MyReviews");

  useEffect(() => {
    fetch(
      `https://doctor-personal-server-side.vercel.app/reviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);


  const handleDelete = (id) => {
    fetch(`https://doctor-personal-server-side.vercel.app/reviews/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = myReviews.filter((review) => review._id !== id);
          setMyReviews(remaining);
          toast.error('Review deleted successfully'); // Show success toast
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error('Failed to delete review'); // Show error toast
      });
  };
  return (
    <div className="my-20">
      {myReviews.length > 0 ? (
        <p className="text-2xl text-indigo-500 font-semibold">
          You have a total of {myReviews.length} reviews
        </p>
      ) : (
        <p>No reviews yet</p>
      )}

      <div className="flex justify-center mt-7">
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-lg">#</th>
                <th className="py-2 px-4 border-b text-lg">Service Name</th>
                <th className="py-2 px-4 border-b text-lg">Review</th>
                <th className="py-2 px-4 border-b text-lg">Time</th>
                <th className="py-2 px-4 border-b text-lg">Patient Name</th>
                <th className="py-2 px-4 border-b text-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myReviews.map((review, index) => (
                <OwnReview
                  key={review._id}
                  review={review}
                  handleDelete={handleDelete}
                  index={index + 1} // Add 1 to the index value
                />
              ))}
            </tbody>
            <tfoot className="md:hidden">
              <tr>
                <th className="py-2 px-4 border-b text-lg">#</th>
                <th className="py-2 px-4 border-b text-lg">Service Name</th>
                <th className="py-2 px-4 border-b text-lg">Review</th>
                <th className="py-2 px-4 border-b text-lg">Time</th>
                <th className="py-2 px-4 border-b text-lg">Patient Name</th>
                <th className="py-2 px-4 border-b text-lg">Actions</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
