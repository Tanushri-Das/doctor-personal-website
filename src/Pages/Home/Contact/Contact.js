import React, { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Contact = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const contactDetails = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch(
        "https://doctor-personal-server-side-tanushri-das.vercel.app/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactDetails),
        }
      );

      if (response.ok) {
        toast.success("Contact message submitted successfully");
        form.reset();
      } else {
        throw new Error("Failed to submit contact message");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit contact message");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 mt-12 mb-20">
        <h2 className="text-3xl text-center mb-6 font-semibold">Contact Us</h2>
        <div className="w-full md:w-1/2 mx-auto">
          <form
            onSubmit={handleSubmit}
            className="shadow-lg rounded-lg p-5 mx-2 md:mx-0"
          >
            <div>
              <div className="text-start  mb-2 md:mb-0">
                <label htmlFor="" className="text-[17px] font-semibold">
                  Name
                </label>
                <input
                  name="name"
                  value={user?.displayName}
                  type="text"
                  placeholder="Your Name"
                  className="input input-ghost input-bordered w-full mt-2"
                />
              </div>
              <div className="text-start mb-2 md:mb-0">
                <label htmlFor="" className="text-[17px] font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  placeholder="Your Email"
                  className="input input-ghost input-bordered w-full mt-2"
                />
              </div>
              <div className="text-start mt-2">
                <label htmlFor="" className="text-[17px] font-semibold">
                  Description
                </label>
                <textarea
                  name="message"
                  className="textarea textarea-bordered mt-2 w-full"
                  placeholder="Write Description"
                  required
                ></textarea>
              </div>

              <div className="flex justify-center items-center mt-2">
                <button
                  type="submit"
                  className="input text-xl text-white font-semibold bg-green-500 input-bordered"
                  value="Add Service"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
