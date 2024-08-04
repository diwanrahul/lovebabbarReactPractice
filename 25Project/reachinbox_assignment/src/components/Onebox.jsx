import React, { useState } from "react";
import { FaReply } from "react-icons/fa";
import { CiDark, CiHome } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { GrDatabase } from "react-icons/gr";
import { SiPowerbi } from "react-icons/si";
import { AiTwotoneContainer } from "react-icons/ai";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const Onebox = () => {
  const [toggleDarkmode, settoggleDarkmode] = useState(false);
  return (
    <div className="flex ">
      <div className="bg-slat-900 w-16 h-[100vh] border-slate-600 border-2 flex flex-col justify-between">
        <div>LOGO</div>
        <div>
          <ul className="flex justify-start flex-col gap-8 items-center text-3xl text-slate-600">
            <li>
              <CiHome />
            </li>
            <li>
              <CiMail />
            </li>
            <li>
              <FaTelegramPlane />
            </li>
            <li>
              <GrDatabase />
            </li>
            <li>
              <AiTwotoneContainer />
            </li>
            <li>
              <SiPowerbi />
            </li>
          </ul>
        </div>
        <div>User</div>
      </div>
      <div className="w-full bg-re-300 flex flex-col ">
        <div className="bg-slat-700 w-full h-16 border-slate-600 border-2 flex items-center justify-between text-xl px-5 border-l-0 ">
          <div>Onebox</div>
          <div className="flex gap-3 items-center ">
            <div className="flex border-2 justify-between gap-4 px-2 rounded-full ">
              <CiLight 
              onClick={()=>settoggleDarkmode(!toggleDarkmode)}
              className={`${toggleDarkmode ? 'visible' : 'invisible' } cursor-pointer ease-in duration-300 `} />{" "}
              <CiDark
              onClick={()=>settoggleDarkmode(!toggleDarkmode)}
               className={`${toggleDarkmode ? 'invisible' : 'visible' } cursor-pointer ease-in duration-300`} />{" "}
            </div>
            <div>User Workspace</div>
          </div>
        </div>
        <div className="flex justify-between bg-gree-400 w-full h-[90vh] ">
          <div className="bg-re-400 w-6/12 h-[90vh] flex flex-col  ">
          <h1>All Inbox(s)</h1>
          <div>
            message
          </div>
          </div>
          <div className="w-full  h-[90vh] bg-whit flex flex-col border-slate-600 border-2 border-t-0">
            <div className="bg-blac h-16 w-full border-slate-600 border-b-2"></div>
            <div className="bg-slat-500 w-full h-full flex items-end  ">
              <div className="bg-blue-500 mb-5 w-[10vw] py-3 text-xl flex justify-center ml-8 text-white rounded-md">
                <button className="flex gap-2 items-center ">
                  <span>
                    <FaReply />
                  </span>{" "}
                  <p className="hidden min-[480px]:block">Reply</p>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-re-400 w-5/12 h-[90vh] flex flex-col justify-between p-1">
          <div className="flex bg-gree-400  py-2 justify-start h-[40vh] flex-col">
            <h2 className="bg-slate-300 p-2 rounded-lg text-slate-700">Lead Details</h2>
          </div>
          <div className="flex bg-gree-400 py-2 justify-start h-[45vh] flex-col">
            <h2 className="bg-slate-300 p-2 rounded-lg text-slate-700">Lead Details</h2>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onebox;
