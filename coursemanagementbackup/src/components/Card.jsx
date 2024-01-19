import PropTypes from 'prop-types';
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

function Card({course, likedCourses, setLikedCourses}) {

   // console.log(course);

   const navigate = useNavigate();


    const likeHandler = () => {
        if(likedCourses.includes(course.id)){
            setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
            toast.warning("like removed");
           // console.log("likedCourses", likedCourses);
        }
        else{
            if(likedCourses.length === 0)
            setLikedCourses([course.id])
        else
            setLikedCourses((prev) => [...prev, course.id]);

            toast.success("Liked Successfull")
           // console.log("likedCourses", likedCourses);

        }
    }


    const handleClick = () => {
    navigate('/courseDetails', {
      state: {
        courseTitle: course.title,
        courseImage: course.image.url,
        courseDescription: course.description,
      },
    });
    }

  return (
    <div className='bg-purple-700 h-[400px] w-[310px] bg-opacity-80 rounded-xl shadow-xl shadow-black overflow-hidden 
    
    transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 
    '>
        <div className='ralative bg-red-700'>
            <img src={course.image.url} alt="course img" />
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute my-[-20px] ml-3 grid place-items-center'>
                <button onClick={likeHandler}>
                    {
                        likedCourses.includes(course.id) ? ( <FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize='1.75rem' />) 
                    }
                </button>
            </div>
        </div>

            <div className='p-6  '>
           
                <p onClick={handleClick} className='text-white font-semibold text-xl leading-6 hover:cursor-pointer' 
               
                >{course.title}
                </p>
  


                <p className='mt-4'>
  {course.description && course.description.length > 100 ? (
    course.description.substr(0, 100) + '...'
  ) : (
    course.description
  )}
</p>

            </div>
    </div>
   
  )
}

Card.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string,
    // Add more specific PropTypes for other properties in 'course' if needed
  }).isRequired,
  likedCourses: PropTypes.arrayOf(PropTypes.number).isRequired,
  setLikedCourses: PropTypes.func.isRequired,
};

export default Card