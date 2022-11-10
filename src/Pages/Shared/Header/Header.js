import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assests/logo.jpg";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const menuItems = (
    <>
      <li className="font-bold text-xl">
        <Link to="/">Home</Link>
      </li>
      <li className="font-bold text-xl">
        <Link to="/blog">Blog</Link>
      </li>
      {user?.email ? (
        <>
          <li className="font-bold text-xl">
            <Link to="/myreviews">My Reviews</Link>
          </li>
          <li className="font-bold text-xl">
            <Link to="/addservice">Add Service</Link>
          </li>
          <li className="font-semibold">
            <button onClick={handleLogOut} className="btn btn-ghost">
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <li className="font-bold text-xl">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="w-10" src={logo} alt="" />
          Tanu Eye Care
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div>
        <Link eventKey={2} className="ml-3">
          {user?.photoURL ? (
            <img
              title={user?.displayName}
              style={{ height: "55px", width: "100px" }}
              rounded
              src={user.photoURL}
            ></img>
          ) : (
            <FaUser></FaUser>
          )}
        </Link>
      </div>
      
    </div>
  );
};

export default Header;
