import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import AllReviewsCard from './AllReviewsCard';

const AllReviews = ({serviceID}) => {

  // const { _id, img, price, title ,description} = myservices;

    const {user} = useContext(AuthContext)
    const [allReviews,setAllReviews] = useState([]);

    useEffect(()=>{
       
        fetch(`http://localhost:5000/reviews/${serviceID}`)
        .then(res => res.json())
        .then(data => setAllReviews(data))
    },[allReviews])

  return (
    <div>
        <h3 className='text-lime-600 text-3xl text-center my-20'>All Reviews</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {
            allReviews.map(reviews => <AllReviewsCard key={reviews._id} reviews={reviews}></AllReviewsCard>)
        }
        {/* {
           const Review = allReviews.filter(reviews => reviews._id === _id)
        } */}
        </div>
        
    </div>
  )
}

export default AllReviews