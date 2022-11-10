
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from '../../../assests/logo.jpg';

import React from 'react'

const Footer = () => {
  return (
    <footer className="footer items-center p-10 bg-neutral text-neutral-content">
  <div className="items-center grid-flow-col">
     <img src={logo} className="w-32 rounded" alt="" /> 
    <p>Copyright © 2022 - All right reserved</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  <a href="https://www.linkedin.com/in/tanushri-das-06a520194/" target='_blank'>
 <FaLinkedin className="text-4xl" style={{color:'#0A66C2'}}></FaLinkedin></a>
 <a href='https://www.youtube.com/watch?v=xz729FOOk94&ab_channel=DWDocumentary' target='_blank'><FaYoutube className="text-4xl" style={{color:'#FF0000'}}></FaYoutube></a> 
<a href='https://www.facebook.com/' target='_blank'><FaFacebook className="text-4xl" style={{color:'#4267B2'}}></FaFacebook></a>
  </div>
</footer>
  )
}

export default Footer
