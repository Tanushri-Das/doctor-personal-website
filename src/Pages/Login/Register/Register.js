import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import register from "../../../assests/Register.webp";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Register = () => {

  const { user, createUser,updateUserProfile ,loading} = useContext(AuthContext);
  const [paswordError, setPaswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const [accepted,setAccepted] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const PhotoURL = form.PhotoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name, email, password, confirm);

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setPaswordError("please provide at least two uppercase");
      return;
    }
    if (password.length < 6) {
      setPaswordError("Please should be at least 6 characters");
      return;
    }
    if (!/(?=.*[!@#$%&*^])/.test(password)) {
      setPaswordError("Please add at least one special character");
      return;
    }
    if (password !== confirm) {
      setPaswordError("password and confirm password did not match");
      return;
    }
    setPaswordError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        form.reset();
        handleUpdateUserProfile(name,PhotoURL);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleUpdateUserProfile = (name,PhotoURL) =>{
    const profile ={
      displayName:name,
      photoURL:PhotoURL
    }
    updateUserProfile(profile)
    .then(()=>{})
    .catch(error =>{console.error(error)});
  }
  const handleAccepted = e =>{
    setAccepted(e.target.checked);
  }
  if(loading){
    
    return <button className="btn btn-square btn-secondary loading"></button>
  }
  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid lg:grid-cols-2 gap-12 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-full h-full rounded" src={register} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 py-5 px-5">
          <h1 className="text-4xl font-bold">Please Register !!!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="PhotoURL" placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirm"
                className="input input-bordered"
              />
            </div>
            <div className="flex">
              <input className="inline" type="checkbox" onClick={handleAccepted}/>
              <div>
              <label className="label">
                <span className="label-text">
                    <Link to='/terms'>Accept Terms and Conditions</Link>
                </span>
              </label>
              </div>
              
            </div>
            <p className="text-red-800">{paswordError}</p>
            {success && (
              <p className="text-success text-2xl">User created successfully</p>
            )}
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value="Sign Up"
                disabled={!accepted}
              />
              
            </div>
          </form>
          <p className="font-bold text-2xl">
            Already have an account ?
            <Link className="text-orange-600" to="/login">
              Please Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
