import React  from 'react'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { Link } from 'react-router-dom'
import { matchPath } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { NavbarLinks } from '../../data/navbar-links'
import { useSelector } from 'react-redux'
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import ProfileDropdown from '../core/Auth/ProfileDropDown'
import { IoIosArrowDown } from "react-icons/io";
// import { useState } from "react"
// import { apiConnector } from '../../services/apiconnector'
// import { categories } from '../../services/apis'

const subLinks =[
    {
        title: "python",
        link: "/catalog/python"
    },
    {
        title: "web dev",
        link: "/catalog/web-development"
    },
]

export default function Navbar() {

    const {token} = useSelector((state)=>state.auth);
    const {user} = useSelector((state)=>state.profile);
    const {totalItems} = useSelector((state)=> state.cart);
    const location = useLocation();



    // const [subLinks, setSubLinks] = useState([]);

    // const fetchSubLinks =  async() => {
    //     try {
    //         const result = await apiConnector("GET", categories.CATEGORIES_API);
    //         console.log("Printing sublinks result", result);
    //          setSubLinks(result.data.data);
    //     } catch (error) {
    //         console.log("Could not fetch the category list");
    //     }
    //    }
    // useEffect(() => {
    //   fetchSubLinks();
    // }, []);



    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }
  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
        <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
            {/* Image */}
            <Link to="/">
                <img src={logo} alt="logo" width={160} height={42} loading='lazy'/>
            </Link>

            {/* New Links */}
            <nav>
                <ul className='flex gap-x-6 text-richblack-25'>
                    {
                        NavbarLinks.map((link, index)=>{
                           return <li key={index}>
                                {
                                    link.title === "Catalog" ? (<div className='relative flex items-center gap-1 group'>
                                        <p>{link.title}</p>
                                        <IoIosArrowDown /> 
                                        <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                        {
                            subLinks.length ? (
                                subLinks.map((subLink, index)=> (
                                    <Link to={`${subLink.link}`} keys={index}>
                                        {subLink.title}
                                    </Link>
                                ))
                            ): (<div></div>)
                        }
                        </div> 
                                    </div>):(
                                        <Link to={link?.path}>
                                        <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"}`}>
                                            {link.title}
                                        </p>
                                        </Link>
                                    )
                                }
                            </li>
                        })
                    }
                </ul>
            </nav>
                
            {/* Login/SignUp/Dashboard */}
            <div className="hidden items-center gap-x-4 md:flex">
                {
                    user && user?.accountType !== "Instructor" && (
                        <Link to="/dashboard/cart" className="relative">
                        <MdOutlineShoppingCart className="text-2xl text-richblack-100" />
                        {totalItems > 0 && (
                          <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                            {totalItems}
                          </span>
                        )}
                      </Link>
                    )}
                    {token === null && (
                      <Link to="/login">
                        <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                          Log in
                        </button>
                      </Link>
                    )}
                    {token === null && (
                      <Link to="/signup">
                        <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                          Sign up
                        </button>
                      </Link>
                    )}
                    {token !== null && <ProfileDropdown />}
                  </div>
                  <button className="mr-4 md:hidden">
                    <IoMdMenu fontSize={24} fill="#AFB2BF" />
                  </button>
                </div>
              </div>
  )
}
