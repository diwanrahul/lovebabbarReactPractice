import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./Navbar.scss";
import { Images } from "../../constants";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const navElement = document.querySelector("nav");
    if (isDarkMode) {
      navElement.style.backgroundColor = "#212121";
      navElement.style.color = "#fff";
    } else {
      navElement.style.backgroundColor = "";
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
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)} 
        className="dark-mode-toggle"
      >
        {isDarkMode ? 'Light' : 'Dark'}
      </button>
    </nav>
  );
};

export default Navbar;
