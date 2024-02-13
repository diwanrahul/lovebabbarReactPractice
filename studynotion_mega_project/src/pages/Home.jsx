import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight} from 'react-icons/fa';
export default function Home() {
  return (
    <div>
        {/* {section1} */}
        <div className='relative mx-auto flex flex-col w-11/12 items-center text-white justify-between '>
            <Link to={"/signup"}>
                <div>
                    <div>
                        <p>become an Instructor</p>
                        <FaArrowRight />
                    </div>
                </div>
            </Link>
        </div>
        {/* {section2} */}

        {/* {section3} */}

        {/* {footer} */}

    </div>
  )
}
