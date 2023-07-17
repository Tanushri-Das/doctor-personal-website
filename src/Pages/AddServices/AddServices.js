import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import UseTitle from "../../Hooks/UseTitle";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
const AddServices = () => {
  const { user } = useContext(AuthContext);

  UseTitle("Add Service");

  const notification = () => toast("Successfully added");

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.img.value;
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;
    const After_Surgery_Precaution = form.After_Surgery_Precaution.value;

    console.log(img, title, price, description, After_Surgery_Precaution);
    const service = {
      serviceName: title,
      price,
      img,
      description,
      After_Surgery_Precaution,
    };
    fetch("https://doctor-personal-server-side.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowleged) {
          alert("Add Services successfully");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="grid grid-cols-1 mt-12 mb-20">
        <h2 className="text-3xl text-center mb-6 font-semibold">
          Add New Service
        </h2>
        <div className="w-full md:w-1/2 mx-auto">
          <form
            onSubmit={handleAddService}
            className="shadow-lg rounded-lg p-5 mx-2 md:mx-0"
          >
            <div>
              <div className="grid lg:grid-cols-2 items-center gap-2">
                <div className="text-start">
                  <label htmlFor="" className="text-[17px] font-semibold">
                    Service Name
                  </label>
                  <input
                    name="title"
                    type="text"
                    placeholder="Services Name"
                    className="input input-ghost input-bordered w-full mt-2"
                  />
                </div>
                <div className="text-start mb-2 md:mb-0">
                  <label htmlFor="" className="text-[17px]  font-semibold">
                    Service Cost
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Cost"
                    className="input input-ghost input-bordered w-full mt-2"
                  />
                </div>
              </div>
              <div className="text-start md:mt-2">
                <label htmlFor="" className="text-[17px] font-semibold">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="img"
                  placeholder="Photo URL"
                  className="input input-ghost input-bordered w-full mt-2"
                />
              </div>
              <div className="text-start mt-2">
                <label htmlFor="" className="text-[17px] font-semibold">
                  Service Description
                </label>
                <textarea
                  name="description"
                  className="textarea textarea-bordered mt-2 w-full"
                  placeholder="Write Description"
                  required
                ></textarea>
              </div>
              <div className="text-start">
                <label htmlFor="" className="text-[17px] font-semibold">
                  After Surgery Precaution
                </label>
                <textarea
                  name="After_Surgery_Precaution"
                  className="textarea textarea-bordered w-full mt-2"
                  placeholder="After_Surgery_Precaution"
                  required
                ></textarea>
              </div>

              <div className="flex justify-center items-center mt-2">
                <button
                  type="submit"
                  onClick={handleAddService}
                  className="input text-xl text-white font-semibold bg-green-500 input-bordered"
                >
                  {service_id ? "Update Service" : "Add Service"}
                </button>
              </div>

              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
