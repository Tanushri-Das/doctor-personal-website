
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import UseTitle from '../../Hooks/UseTitle';

import OwnReview from '../OwnReview/OwnReview';


const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    UseTitle('MyReviews')

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = myReviews.filter(odr => odr._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }

    
    return (
        <div className='my-20'>
            
            {
                myReviews.length > 0 ? <p>You have total {myReviews.length} Reviews</p>
                :
                <p>No Reviews yet here</p>

            }
            <div className='mt-5 w-3/4 mx-16 lg:mx-44 border-solid border-2'>
                {
                    myReviews.map(review => <OwnReview
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                        
                    ></OwnReview>)
                }
            </div>
        </div>
    );
};

export default MyReviews;