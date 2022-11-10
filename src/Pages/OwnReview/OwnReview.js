import { Link } from "react-router-dom";

const OwnReview = ({ review, handleDelete, handleMessageUpdate }) => {
  const { photoURL, patient,serviceName, _id, message } = review;
  console.log(review)

  return (
    <div className="flex">
      <div className="card card-side w-full shadow-xl mb-5">
          <img src={photoURL} className="w-40" alt="Movie" />

        <div className="card-body">
          <h2 className="card-title">Service Name :{serviceName}</h2>
          <p className="card-title text-justify">Review:{message}</p>
          <h2 className="card-title">Patient Name :{patient}</h2>
          
        </div>
        <button onClick={() => handleDelete(_id)} className="btn btn-primary my-4">
            X
          </button>
      </div>
     
      {/* <div>
        <label>
            
         
          <Link to='/update'>
          <button className="btn btn-ghost">Update</button>
          </Link>
            
          
        </label>
      </div> */}
      </div>
 
  );
};

export default OwnReview;
