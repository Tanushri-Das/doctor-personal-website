import React from "react";
import Marquee from "react-fast-marquee";
const MarqueeText = () => {
  return (
    <div className=" bg-slate-500 p-4 text-white font-medium">
      <Marquee className="text-lg">
        I am an Eye Consultant. This is my personal website for eye care. I am
        here to provide you with the best eye care services. I specialize in
        various eye conditions and treatments, including cataract surgery,
        LASIK, and glaucoma management. With years of experience and a
        commitment to delivering exceptional patient care, I strive to ensure
        optimal eye health and vision for all my patients. Contact me today for
        any eye-related concerns or to schedule an appointment.
      </Marquee>
    </div>
  );
};

export default MarqueeText;
