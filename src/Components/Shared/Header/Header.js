// import React, { useContext } from "react";
// import { FaUser } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import logo from "../../../assests/logo.jpg";
// import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

// const Header = () => {
//   const { user, logOut } = useContext(AuthContext);

//   const handleLogOut = () => {
//     logOut().then().catch();
//   };

//   const menuItems = (
//     <>
//       <li className="font-bold text-xl">
//         <Link to="/">Home</Link>
//       </li>
//       <li className="font-bold text-xl">
//         <Link to="/blog">Blog</Link>
//       </li>
//       {user?.email ? (
//         <>
//           <li className="font-bold text-xl">
//             <Link to="/myreviews">My Reviews</Link>
//           </li>
//           <li className="font-bold text-xl">
//             <Link to="/addservice">Add Service</Link>
//           </li>
//           <li className="font-semibold">
//             <button onClick={handleLogOut} className="btn btn-ghost">
//               Sign Out
//             </button>
//           </li>
//         </>
//       ) : (
//         <li className="font-bold text-xl">
//           <Link to="/login">Login</Link>
//         </li>
//       )}
//     </>
//   );
//   return (
//     <div className="navbar bg-base-100 shadow-lg">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <label tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </label>
//           <ul
//             tabIndex={0}
//             className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             {menuItems}
//           </ul>
//         </div>

//         <Link to="/" className="btn btn-ghost normal-case text-xl">
//           <img className="w-10" src={logo} alt="" />
//           Tanu Eye Care
//         </Link>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal p-0">{menuItems}</ul>
//       </div>
//       <div>
//         <Link eventKey={2} className="ml-3">
//           {user?.photoURL ? (
//             <img
//               title={user?.displayName}
//               style={{ height: "55px", width: "100px" }}
//               rounded
//               src={user.photoURL}
//             ></img>
//           ) : (
//             <FaUser></FaUser>
//           )}
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState, useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assests/logo.jpg";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    logOut().then().catch();
  };

  return (
    <nav className="bg-slate-400 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="mr-10 text-xl lg:text-3xl text-white font-extrabold flex-shrink-0">
            OptiCare
          </h1>
          <div className="flex items-center">
            <div className="hidden md:block ml-auto">
              <div className="flex justify-center space-x-4">
                <a
                  href="/"
                  className="text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Home
                </a>
                <a
                  href="/blog"
                  className="text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Blog
                </a>
                {user?.email ? (
                  <>
                    <a
                      href="/myreviews"
                      className="text-white px-3 py-2 rounded-md text-lg font-medium"
                    >
                      My Reviews
                    </a>
                    <a
                      href="/addservice"
                      className="text-white px-3 py-2 rounded-md text-lg font-medium"
                    >
                      Add Service
                    </a>
                    <a
                      onClick={handleLogOut}
                      className="text-white px-3 py-2 rounded-md text-lg font-medium"
                    >
                      Sign Out
                    </a>
                  </>
                ) : (
                  <a
                    href="/login"
                    className="text-white px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Login
                  </a>
                )}
                <a eventKey={2} className="ml-3">
                    {user?.photoURL ? (
                      <img
                        title={user?.displayName}
                        style={{ height: "55px", width: "100px" }}
                        rounded
                        src={user.photoURL}
                      ></img>
                    ) : (
                      <FaUser className="text-white" style={{ height: "40px", width: "40px" }}></FaUser>
                    )}
                  </a>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <a
                onClick={toggleNavbar}
                href="#"
                className="bg-blue-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-none focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-start">
            <a
              href="/"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="/blog"
              className="text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              Blog
            </a>
            <div>
              {user?.email ? (
                <>
                  <a
                    href="/myreviews"
                    className="text-white px-3 py-2 rounded-md text-lg font-medium"
                  >
                    My Reviews
                  </a>
                  <br />
                  <a
                    href="/addservice"
                    className="text-white px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Add Service
                  </a>
                  <br />
                  <a
                    onClick={handleLogOut}
                    className="text-white px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Sign Out
                  </a>
                </>
              ) : (
                <a
                  href="/login"
                  className="text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Login
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
