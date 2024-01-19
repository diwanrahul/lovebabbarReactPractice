import  { useState } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

function Cards({ courses, category }) {
   
    const [likedCourses, setLikedCourses] = useState([]);
    
    const getCourses = () => {
        if(category === 'All')
       { const allCourses = [];
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            });
        });
        
        return allCourses;
    }
        else{
            return courses[category];
        }

    };
    //   console.log("courses is  ", courses);
    
  
    return ( 
        <div className='flex flex-wrap  mt-7 gap-7 justify-center'  >
            
            {getCourses().map((course, index) => (
                <Card key={index} course={course} likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}
                
                /> 
            ))}
        </div>
    );
}

Cards.propTypes = {
    courses: PropTypes.object.isRequired, // Assuming courses is an object
    category: PropTypes.string.isRequired,
};
export default Cards;
