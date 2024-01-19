import { useEffect, useState} from "react";
import Cards from "../components/Cards";
import { apiUrl, filterData } from "../data/CourseCategory";
import {toast} from 'react-toastify'
import Spinner from "../components/Spinner";


function Home() {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  
  const fetchData = async() => { 
    try {
      const res = await fetch(apiUrl)
      const output = await res.json();
      //console.log(output.data);
      setCourses(output.data); 
      setLoading(false);
    } catch (error) {
      toast.error("something went wrong in API calling");
    }
  }

  useEffect(() => {
    fetchData();
    // updatingCategory(category);
    setCategory(category)
  }, []);


  return (
    <div className="min-h-screen flex flex-col" 
    >
         <div className="w-full max-w-[1000px]  mx-auto flex flex-wrap justify-center items-center min-h-[50vh] pt-[100px] mt-8">
            {
              loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
            }
         </div>
    
    </div>
  )
}

export default Home