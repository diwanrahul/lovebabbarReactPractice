import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Images } from "../../constants";
import "./About.scss";
import { urlFor, client } from "../../client";
import { AppWrap } from "../../wrapper";
const About = ({isDarkMode}) => {

  // const [abouts, setAbouts] = useState([]);
  // useEffect(() => {
  //   const query = "*[_type=='abouts']";
  //   client.fetch(query)
  //   .then((data)=>setAbouts(data));
  //   return () => {
      
  //   };
  // }, []);
  const abouts=[
    {title:"Web Development ",description:"I am web developer", imgURL:Images.about01},
    {title:"Frontend Development ",description:"I am Frontend developer", imgURL:Images.about02},
    {title:"Java Development ",description:"I am Java developer", imgURL:Images.about03},
    {title:"Backend Development ",description:"I am Backend developer", imgURL:Images.about04},
  ]
  useEffect(() => {
    const homeElement = document.querySelector("#About");
    if (isDarkMode) {
      homeElement.style.background = "#212121";
    } else {
      homeElement.style.background = "";
    }
  }, [isDarkMode]);
  return (
    <div id="About" style={{backgroundColor:isDarkMode && "#212121"}}>
      <h2 className="head-text">I know that <span>Good Development</span><br />means <span>Good Business</span></h2>
      <div className="app__profiles">
        {
          abouts.map((about, index)=>(
            <motion.div 
            key={index}
            whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.5, type:"tween"}}
            className="app__profile-item"
            >
              <img src={about.imgURL} alt={about.title} />
              <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
              <p className="p-text" style={{marginTop:10}}>{about.description}</p>
              <p></p>
            </motion.div>
          ))
        }
      </div>
    </div>
  );
};

export default AppWrap(About, "about",);
