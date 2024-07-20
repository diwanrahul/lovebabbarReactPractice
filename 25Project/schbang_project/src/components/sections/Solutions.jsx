import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Solutions = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleColor = () => {
        const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        return newColor;
    }

    return (
        <div className="h-screen bg-white flex justify-center items-center relative">
            {[
                "Brand Solution",
                "Tech Solution",
                "Media Solution",
                "Research Solution",
                "Film & Photography",
            ].map((item, index) => (
                <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                        backgroundColor: hoveredIndex === index ? handleColor() : 'transparent',
                        transition: 'background-color 0.5s ease-in-out'
                    }}
                    className="flex flex-col justify-center items-center gap-[2rem] text-center border h-full text-[3rem] px-5 text-slate-500 hover:text-white group"
                >
                    {item}
                    <div>
                        <p style={{ visibility: hoveredIndex === index ? 'visible' : 'hidden' }} className="text-sm ">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                            soluta libero et commodi, dolores similique sed nulla quas
                            obcaecati provident officia natus, incidunt repudiandae est ullam
                            ex quis tempore porro!
                        </p>
                    </div>
                    <div>
                        <button style={{ visibility: hoveredIndex === index ? 'visible' : 'hidden' }} className="rounded-full bg-white text-[1em] p-3 group-hover:text-black ease-in-out duration-300">
                            <HiOutlineArrowNarrowRight />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Solutions;
