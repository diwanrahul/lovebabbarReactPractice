import React, { useEffect } from 'react'
import {BsTwitter, BsInstagram} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import { useSelector } from 'react-redux'
const SocialMedia = () => {
  const isDarkMode = useSelector((state)=>state.darkmode.isDarkMode)


  useEffect(() => {
    const homeElement = document.querySelector(".app__social");
    if (isDarkMode) {
      homeElement.style.background = "#212121";
    } else {
      homeElement.style.background = "";
    }
  }, [isDarkMode]);

  return (
    <div className='app__social'>
        <div>
            <BsInstagram />
        </div>
        <div>
            <BsTwitter />
        </div>
        <div>
            <FaFacebookF />
        </div>
    </div>
  )
}

export default SocialMedia