import React, { useEffect, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
// Import images statically
import Images from '../../constants/images'; // Assuming you have a constants folder with an images file
import './Testimonials.scss';
import { useSelector } from 'react-redux';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDarkMode = useSelector((state)=>state.darkmode.isDarkMode)


  useEffect(() => {
    const homeElement = document.querySelector(".app__testimonial");
    if (isDarkMode) {
      homeElement.style.background = "#212121";
    } else {
      homeElement.style.background = "";
    }
  }, [isDarkMode]);

  // Static data for testimonials
  const testimonials = [
    { title: "Web Development", description: "I am a web developer", imgURL: Images.about01 },
    { title: "Frontend Development", description: "I am a Frontend developer", imgURL: Images.about02 },
    { title: "Java Development", description: "I am a Java developer", imgURL: Images.about03 },
    { title: "Backend Development", description: "I am a Backend developer", imgURL: Images.about04 },
  ];

  // Static data for brands
  const brands = [
    { _id: 1, name: 'Brand 1', imgUrl: Images.bolt },
    { _id: 2, name: 'Brand 2', imgUrl: Images.asus },
    { _id: 3, name: 'Brand 3', imgUrl: Images.amazon },
    { _id: 4, name: 'Brand 4', imgUrl: Images.skype },
  ];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {testimonials.length && (
        <>
          <div id='Testimonials' className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].imgURL} alt={testimonials[currentIndex].title} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].description}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].title}</h4>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
