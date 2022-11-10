import React from "react";
import { FaFacebook,FaLinkedin} from "react-icons/fa";
import myImg from '../../../assests/about.jpg';

const AboutMine = () => {
  return (
    <div className="hero my-10">
        
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={myImg}
          class="shadow rounded-full max-w-md h-96 align-middle border-none"
        />
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-4">Dr. Tanushri Das</h1>
          <p className="text-2xl">DOLV(USA),MLOP(Eye),FP,FFA,OCT(CLF),Refrraction & Low Vision (MBICO) State Medical Faculty of Bangladesh</p>
          <p className="py-6">
            I am a Eye Consultant.This is my personal website for people eye care.
          </p>
          <div>
            <span className="text-purple-700 text-2xl">Any Query ! Feel free to Connect with me</span>
            <div className="flex justify-center mt-6">
              <a
                href="https://www.linkedin.com/in/tanushri-das-06a520194/"
                target="_blank"
              >
                <FaLinkedin
                  className="text-4xl mr-5"
                  style={{ color: "#0A66C2" }}
                ></FaLinkedin>
              </a>
              
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebook
                  className="text-4xl"
                  style={{ color: "#4267B2" }}
                ></FaFacebook>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMine;
