/* eslint-disable react/prop-types */
import Card from "./Card";
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { useState } from "react";
export default function Testimonial(props) {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    const leftShiftHandler = () => {
            if(index-1 < 0){
                setIndex(reviews.length - 1);
            }else{
                setIndex(index - 1);
            }
    }

    const rightShiftHandler = () => {
            if(index+1 >= reviews.length){
                setIndex(0);
            }else{
                setIndex(index+1);
            }
    }

    const surpriseHandler = () => {
            let random = Math.floor(Math.random() * reviews.length);
            setIndex(random);
    }

    
  return (
    <div className="w-[85px] h-[60vh] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 shadow-black hover:shadow-2xl rounded-lg">
        <Card review={reviews[index]}></Card>

        
        <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto'>

<button className='cursor-pointer hover:text-violet-500'
onClick={leftShiftHandler}>
    <FiChevronLeft />
</button>
<button className='cursor-pointer hover:text-violet-500'
onClick={rightShiftHandler}>
    <FiChevronRight />
</button>
</div>

<div className="mt-5">
<button className='bg-violet-400 hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'
onClick={surpriseHandler}>
    Surprise ME
</button>
</div>
    </div>
  )
}
