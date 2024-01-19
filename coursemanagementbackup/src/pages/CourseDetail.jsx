import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext';
const CourseDetails = () => {
    const {isDarkMode} = useContext(DarkModeContext)
    const location = useLocation();
    const { courseTitle, courseImage, courseDescription} = location.state || {};
  
    if (!courseTitle || !courseImage) {
      return <div>No data available</div>;
    }
    // console.log(location);

    return (
      <div className='flex justify-around gap-7  mt-20  p-9 mx-5'> 
      <div className='w-[1000px] rounded-xl '>
        <img src={courseImage} alt="Course" className={`rounded-xl shadow-lg ${isDarkMode ? "shadow-white" : "shadow-black" }
          `} 
         />
      </div>
       
       <div className='mt-5 leading-6 font-semibold'>
        <h1 className='text-3xl text-orange-500' >Course Details</h1>
        <p className={` mt-5 font-semibold text-xl ${isDarkMode ? 'text-white' : 'text-red'}`}>Course Title: {courseTitle}</p>
        <p className={`w-[500px] mt-3  ${isDarkMode ? "text-white" : "text-red"}`}>Description : {courseDescription}</p>
       </div>
        
       
       
       
      </div>
    );
  };
  
  export default CourseDetails;
  