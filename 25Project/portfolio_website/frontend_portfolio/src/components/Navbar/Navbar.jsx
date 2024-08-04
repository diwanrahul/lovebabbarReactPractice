import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./Navbar.scss";
import { Images } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode } from "../../features/DarkmodeSlice"; // Ensure correct path
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkmode.isDarkMode);

  useEffect(() => {
    const homeElement = document.querySelector("nav");
    if (isDarkMode) {
      homeElement.style.background = "#212121";
      homeElement.style.color = "#fff";
    } else {
      homeElement.style.background = "";
    }
  }, [isDarkMode]);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={Images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["Home", "About", "Work", "Skills", "Contacts"].map((item) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["Home", "About", "Work", "Skills", "Contacts"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
     {
      !isDarkMode 
        ? <MdDarkMode style={
          {
            color:"black",
            fontSize:"25",
            cursor:"pointer"
          }
        } onClick={() => dispatch(setDarkMode(!isDarkMode))} /> 
        : <MdOutlineDarkMode
        style={
          {
            color:"white",
            fontSize:"25",
            cursor:"pointer"
          }
        } onClick={() => dispatch(setDarkMode(!isDarkMode))} />
     }
    </nav>
  );
};

export default Navbar;
