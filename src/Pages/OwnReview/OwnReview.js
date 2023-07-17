import { Link } from "react-router-dom";

const OwnReview = ({ review, handleDelete, handleMessageUpdate, index }) => {
  const { photoURL, patient, serviceName, _id, message, time } = review;
  console.log(review);

  return (
    <tr>
      <td className="py-2 px-4 border-b text-center">{index}</td>
      <td className="py-2 px-4 border-b text-center">{serviceName}</td>
      <td className="py-2 px-4 border-b text-center">{message}</td>
      <td className="py-2 px-4 border-b text-center">
        {new Date(time).toDateString()}
      </td>
      <td className="py-2 px-4 border-b text-center">{patient}</td>
      <td className="py-2 px-4 border-b text-center">
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 sm:mt-0"
        >
          Delete
        </button>
        <Link
          to="/update"
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
        >
          Update
        </Link>

        {/* Open the modal using ID.showModal() method */}
        
      </td>
    </tr>
  );
};

export default OwnReview;
