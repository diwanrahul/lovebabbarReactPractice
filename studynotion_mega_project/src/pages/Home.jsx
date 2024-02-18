import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight} from 'react-icons/fa';
import HighlightText from '../components/core/Homepage/HighlightText';
import CTAButton from "../components/core/Homepage/Button";
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/Homepage/CodeBlocks';
import TimelineSection from "../components/core/Homepage/TimelineSection"
import LearningLanguageSection from "../components/core/Homepage/LearningLanguageSection"

export default function Home() {
  return (
    <div>
        {/* {section1} */}
        <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContetn items-center text-white justify-between '>
            <Link to={"/signup"}>
                <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
                    <div className='flex items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                        <p>Become an Instructor</p>
                        <FaArrowRight />
                    </div>
                </div>
            </Link>
            <div className='text-center text-4xl font-semibold mt-7'>
                Empower Your Future with
                <HighlightText text={"Coding Skills"} />
            </div> 


            <div className='mt-3 w-[90%] text-center text-lg font-bold text-richblack-300'>
            With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
            </div>


                {/* CTA Buttons */}
            <div className="mt-8 flex flex-row gap-7">
            <CTAButton active={true} linkto={"/signup"}>
                Learn More
            </CTAButton>
            <CTAButton active={false} linkto={"/login"}>
                Book a Demo
            </CTAButton>
            </div>

            {/* Video */}
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

            {/* codesection 1 */}
            <div>
                <CodeBlocks
                position={"lg:flex-row"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock your
                        <HighlightText text={"coding potential"} /> with our online course.
                    </div>
                }
                subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                ctabtn1={{
                    btnText: "Try it Yourself",
                    link: "/signup",
                    active: true,
                }}

                ctabtn2={{
                    btnText: "Learn More",
                    link: "/signup",
                    active: false,
                }}
                codeColor={"text-yellow-25"}
                codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                backgroundGradient={<div className='codeblock1 absolute'></div>}
                />
            </div>

            {/* Code Section 2 */}
           
             <div>
                <CodeBlocks
                position={"lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Start
                        <HighlightText text={"coding in seconds"} /> 
                    </div>
                }
                subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
                ctabtn1={{
                    btnText: "Continue Lesson",
                    link: "/signup",
                    active: true,
                }}

                ctabtn2={{
                    btnText: "Learn More",
                    link: "/signup",
                    active: false,
                }}
                codeColor={"text-yellow-25"}
                codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                backgroundGradient={<div className='codeblock1 absolute'></div>}
                />
            </div>
        </div>




        {/* {section2} */}
        
        <div className='bg-pure-greys-5 text-richblack-700'>
            <div className='homepage_bg h-[310px]'>
                <div className='w-11/12 max-w-maxContent flex flex-col justify-between items-center gap-5 mx-auto'>
                    <div className="h-[150px]"></div>
                    <div className='flex gap-7 text-white'>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex gap-3 items-center'>
                                Explore Full Catalog
                                <FaArrowRight />
                            </div>
                            
                        </CTAButton>
                        <CTAButton active={false} linkto={"/signup"}>
                            <div>
                                Learn more
                            </div>
                        </CTAButton>
                    </div>
                </div>
            </div>

            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
                <div className='flex flex-row gap-5 mb-10 mt-[95px]'>
                    <div className='text-4xl font-semibold w-[45%]'>
                        get the Skills you need for a <HighlightText text={"Job that is in demand"} />
                    </div>
                <div className='flex flex-col gap-10 w-[40%] items-start'>
                    <div className='text-[16px]'>
                        The modern StudyNotion is the dictates its own terms. Today, to be a cometitive specialist requires more than professional skills.
                    </div>
                    <CTAButton active={true} linkto={"/signup"}>
                    <div>
                        Learn more
                    </div>
                    </CTAButton>
                </div>
                </div>

            <TimelineSection />
            <LearningLanguageSection />
            </div>

        </div>
        {/* {section3} */}

        {/* {footer} */}

    </div>
  )
}
