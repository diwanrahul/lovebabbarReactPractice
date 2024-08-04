import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const NavigationDots = ({ active }) => {
  const isDarkMode = useSelector((state)=>state.darkmode.isDarkMode)


  useEffect(() => {
    const homeElement = document.querySelector(".app__navigation");
    if (isDarkMode) {
      homeElement.style.background = "#212121";
    } else {
      homeElement.style.background = "";
    }
  }, [isDarkMode]);

  return (
    <div className="app__navigation " 
    // style={{ backgroundColor: "#212121" }}
    >
      {["Home", "About", "Work", "Skills", "Testimonials", "Contacts"].map(
        (item) => (
          <a
            key={item}
            href={`#${item}`}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
