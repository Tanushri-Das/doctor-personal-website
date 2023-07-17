import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import myImg from "../../../assests/about.png";

const AboutMine = () => {
  return (
    <div className="my-12">
      <h2 className="text-4xl font-bold mb-10">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between mx-20">
        <div className="w-full">
          <h1 className="text-2xl font-bold mb-4">Dr. Puja Singh</h1>
          <p className="text-[18px] font-medium">
            DOLV(USA), MLOP(Eye), FP, FFA, OCT(CLF), Refraction &amp; Low Vision
            (MBICO), State Medical Faculty of Bangladesh.
          </p>
          <p className="py-6 text-[18px] font-medium">
            I am an Eye Consultant. This is my personal website for Eye Treatment.
          </p>
          <div>
            <span className="text-xl">
              Any Query! Feel free to connect with me
            </span>
            <div className="flex justify-center mt-6">
              <a
                href="https://www.linkedin.com/in/tanushri-das-06a520194/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  className="text-4xl mr-5"
                  style={{ color: "#0A66C2" }}
                />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-4xl" style={{ color: "#4267B2" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src={myImg}
            className="shadow rounded-lg w-full max-w-md h-64 md:h-[320px] align-middle border-none"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMine;
