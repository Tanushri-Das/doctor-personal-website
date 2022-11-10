import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider'
import UseTitle from '../../Hooks/UseTitle';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
const AddServices = () => {

    const {user} = useContext(AuthContext);

    UseTitle('Add Service');

    const notification = () => toast("Successfully added")

    const handleAddService = e =>{
        e.preventDefault();
        const form = e.target;
        const img = form.img.value;
        const title = form.title.value;
        const price = form.price.value;
        const description = form.description.value;
        const After_Surgery_Precaution = form.After_Surgery_Precaution.value;

        console.log(img,title,price,description,After_Surgery_Precaution);
        const service = {
            
            serviceName: title,
            price,
            img,
            description,After_Surgery_Precaution
          };
          fetch('https://doctor-personal-server-side.vercel.app/services',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(service)
          })
          .then(res => res.json()) 
          .then(data => {
            console.log(data)
            if(data.acknowleged){
              alert('Add Services successfully');
              form.reset();
            }
          })
          .catch(error => console.error(error))
    }

  return (
    <div>
      <div className='grid grid-cols-1 mt-12 mb-20'>
            <h2 className='text-4xl text-center mb-12'>Add your new service : </h2>
            <form onSubmit={handleAddService}>
          <div>
          <input
              type="text"
              name="img"
              placeholder="Photo URL"
              className="input input-ghost input-bordered w-full"
            />
            <input
              name="title"
              type="text"
              placeholder="Services Name"
              className="input input-ghost input-bordered w-full my-4"
            />
            
            <input
            type="text" name="price"
            placeholder="Cost"
            className="input input-ghost input-bordered w-full"
          />
            <textarea
              name="description"
              className="textarea textarea-bordered h-36 my-4 w-full"
              placeholder="Write Description"
              required
            ></textarea>
            <textarea
              name="After_Surgery_Precaution"
              className="textarea textarea-bordered h-36 my-4 w-full"
              placeholder="After_Surgery_Precaution"
              required
            ></textarea>
            

<button type="submit" onClick={notification} className="input text-xl text-white bg-orange-400 input-bordered w-full" value="Add Service">
                        Submit</button>    <ToastContainer />
          </div>
        </form>
      </div>
    </div>
    
  )
}

export default AddServices