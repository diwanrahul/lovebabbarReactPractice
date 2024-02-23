/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import { useEffect, useState } from "react";
export default function ImageSlider ({url, limit=5, page=1}){

    const [images, setImages] = useState([]);
    const [currImage, setCurrImage] = useState(0);
    const [error, setError] = useState("");

    const fetchImage= async (geturl)=>{
        try {
          const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);

          const data = await response.json();
          setImages(data);
        } catch (error) {
            setError("unable to fetch Image");
        }
    }
    console.log(images);
    useEffect(()=>{
    if(url)
        fetchImage(url);

    },[url])

    const handleLeftImageSlider = (id) => {
        id+=1;
        setCurrImage(images[id].download_url);
    }
    const handleRightImageSlider = (id) => {
        id-=1;
        setCurrImage(images[id].download_url);
    }
    return(
        <div className="flex justify-center items-center w-10/12 h-11">
            <BsArrowLeftCircleFill  onClick={()=>handleRightImageSlider()}/>
            {
               images && images.length 
               ? images.map((image)=>(
                    <img 
                     key={image.id}
                     src={image.download_url}
                     alt={image.download_url}
                      />
                ))
                : null
            }

            <BsArrowRightCircleFill onClick={handleLeftImageSlider} />
            <span>
                
            {
                images && images.length 
                ? images.map((_, index)=>(
                    <button key={index}>

                    </button>
                ))
                : null
            }
            </span>
        </div>
    )
}