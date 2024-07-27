import React from "react";

const NavigationDots = ({ active }) => {
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
