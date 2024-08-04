import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
// Import images statically
import Images from '../../constants/images'; // Assuming you have a constants folder with an images file
import './Skills.scss';
import { useSelector } from 'react-redux';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const isDarkMode = useSelector((state)=>state.darkmode.isDarkMode)


  useEffect(() => {
    const homeElement = document.querySelector("#Skills");
    if (isDarkMode) {
      homeElement.style.background = "#212121";
    } else {
      homeElement.style.background = "";
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Static data for skills
    const staticSkills = [
      { name: 'HTML', bgColor: '#eee', icon: Images.html },
      { name: 'CSS', bgColor: '#eee', icon: Images.css },
      { name: 'JavaScript', bgColor: '#eee', icon: Images.javascript },
      { name: 'React', bgColor: '#eee', icon: Images.react },
      { name: 'Node', bgColor: '#eee', icon: Images.node },
      { name: 'Java', bgColor: '#eee', icon: Images.java },
      { name: 'Redux ', bgColor: '#eee', icon: Images.redux },
      { name: 'Git ', bgColor: '#eee', icon: Images.git },
      { name: 'C++ ', bgColor: '#eee', icon: Images.cpp },
    ];

    // Static data for experiences
    const staticExperiences = [
      {
        year: '2024',
        works: [
          { name: 'React Js Developer', company: 'MPSEDC', desc: 'Worked on developing frontend using React.' },
         
        ],
      },
      {
        year: '2022',
        works: [
          { name: 'Cyber Security Intern', company: 'SISTMR', desc: 'Worked on cyber threads.' },
        ],
      },
    ];

    setSkills(staticSkills);
    setExperiences(staticExperiences);
  }, []);

  return (
    <div id='Skills'>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    
                
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
