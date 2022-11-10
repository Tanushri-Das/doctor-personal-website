import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const UpdateReview = () => {

    const {user} = useContext(AuthContext);
    const params = useParams()

    const [reviews,setReviews] = useState([]);

    const handleUpdateReview = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const message = form.message.value;
        console.log(name,photoURL,message)

        const reviews = {
            name,photoURL,message
        }
        
        fetch(`https://doctor-personal-server-side.vercel.app/reviews/${params.id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(reviews)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }

  return (
    <div>
        <h2>UpdateReview</h2>
        <form onSubmit={handleUpdateReview}>
          <div>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              className="input input-bordered my-4"
              readOnly
            />
            <img name="photoURL" src={user?.photoURL} className="mx-auto mb-4" alt="" />
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
           
           <input
                type="submit"
                className="btn btn-outline btn-secondary"
                value="Give Review"
              />
          </div>
        </form>
    </div>
  )
}

export default UpdateReview