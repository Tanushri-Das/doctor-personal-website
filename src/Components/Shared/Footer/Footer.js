import React from "react";
import { Link } from "react-router-dom";
import footer from '../../../assests/footer.png';

const Footer = () => {
  
  const date = new Date().getFullYear();
  

  return (
    <footer className='mx-5' style={{background:`url(${footer})`,backgroundSize:'cover'}}>
      <div className="footer sm:grid-cols-3">
        <div className="sm:mt-[74px] lg:ml-20">
          <span className="footer-title">Services</span>
          <Link to='/' className="link link-hover text-lg">Emergency Checkup</Link>
          <Link to='/' className="link link-hover text-lg">Monthly Checkup</Link>
          <Link to='/' className="link link-hover text-lg">Weekly Checkup</Link>
          <Link to='/' className="link link-hover text-lg">Deep Checkup</Link>
        </div>
        <div className="sm:mt-[74px]">
          <span className="footer-title">Company</span>
          <Link to='/' className="link link-hover text-lg">LASIK Surgery</Link>
          <Link to='/' className="link link-hover text-lg">Contact Lens Fitting</Link>
          <Link to='/' className="link link-hover text-lg">Eye Exams</Link>
        </div>
        <div className="sm:mt-[74px]">
          <span className="footer-title">Legal</span>
          <Link to='/' className="link link-hover text-lg">OUR ADDRESS</Link>
          <p className="text-lg text-start">New York - 101010 Hudson</p>
        </div>
      </div>
      <div className="text-center mt-32 mb-12">
        <p className="text-lg">Copyright © {date} - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
