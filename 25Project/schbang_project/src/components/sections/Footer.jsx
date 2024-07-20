import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
  return (
    <div className="bg-black h-screen text-white relative bg-fixed">
      <div>
        <h1 className="text-[20rem] font-bold tracking-[-0.12em] text-center ">Schbang</h1>
      </div>
      <div>
        <div className="bg-re-600 flex  justify-between items-center mx-[8rem]  px-8 py-5 border-t-2 border-white">
          <div className="flex gap-7">
            <FaLinkedin size={30} />
            <BsInstagram size={30} />
            <IoLogoYoutube size={30} />
            <ImFacebook2 size={30} />
          </div>
          <div>
            <ul className="flex gap-4">
              <li>About</li>
              <li>Contact</li>
              <li>Case Studies</li>
              <li>blog</li>
              <li>privacy</li>
            </ul>
          </div>
          <div className="flex flex-col items-end">
            <p>Proudly created in India.</p>
            <p>All Right Reserved, All Wrong Reversed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
