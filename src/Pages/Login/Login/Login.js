import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signin from "../../../assests/login.jpg";

import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import UseTitle from "../../../Hooks/UseTitle";

const Login = () => {

    const {user,login,providerLogin,loading} = useContext(AuthContext);
    const [passwordError,setPasswordError] = useState('');
    const [success,setSuccess] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider();
    
    UseTitle('Login')

    const from = location.state?.from?.pathname || '/';

    const handleLogin = e =>{
        e.preventDefault();
        setSuccess(false);
        setPasswordError('');
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        login(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setSuccess(true);
            navigate(from,{replace:true});
            form.reset();
        })
        .catch(error =>{
            if(error.message == 'Firebase: Error (auth/wrong-password).'){
              setPasswordError('please provide a valid password')
            }
        })
    }
    const handleGoogleSignIn = () =>{
      providerLogin(googleProvider)
      .then(result =>{
          const user = result.user;
          navigate(from,{replace:true})
          console.log(user)
      })
      .catch(error =>{
          console.error(error)
      })
      
  }
  if(loading){
    
    return <button className="btn btn-square btn-accent loading"></button>
  }
  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid lg:grid-cols-2 gap-10 flex-col lg:flex-row">
      <div className="text-center lg:text-left">
          <img className="w-full h-full rounded" src={signin} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 py-10">
          <h1 className="text-4xl font-bold">Login !!!</h1>
          <form onSubmit={handleLogin} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p className="text-red-600 text-2xl mt-2">{passwordError}</p>
        {success && <p className="text-green-500">Successfully login in your account</p>}
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
            <button className="btn btn-outline btn-secondary" onClick={handleGoogleSignIn}>Login with Google</button>
          </form>
          <p className="font-bold text-2xl">New to this website ? <Link className='text-orange-600' to='/signup'> Please Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
