/* eslint-disable no-unused-vars */
import React, {useState, useEffect}from 'react'
import { useContext } from 'react';
import {useNavigate , useLocation}  from 'react-router-dom'
import { AppContext } from '../context/AppContext';
// import baseUrl from '../baseUrl';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';









export default function BlogPage() {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
const [relatedBlogs, setRelatedBlogs] = useState([]);
const location = useLocation();
const navigation = useNavigate();
const {setLoading, loading}  = useContext(AppContext);
const blogId = location.pathname.split("/").at(-1);


const fetchRelatedBlogs = async () => {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        setBlog(data.blog);
        setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
        console.log("Error :", error);
        setBlog(null);
        setRelatedBlogs([]);
    }
    setLoading(false);
}

useEffect(() => {
    if(blogId)
    fetchRelatedBlogs();
},[location.pathname])

  return (
    <div>
         <Header />
         <div>
            <button
            onClick={() => navigation(-1)}>
                back
            </button>
         </div>
         {
            loading
             ? <p>Loading...</p>
             : (
                blog ? (
                    <div>
                        <BlogDetails post={blog} />
                        <h2>Realated Blogs</h2>{
                            relatedBlogs.map((post, index) => (
                               <div key={index}>
                                    <BlogDetails post={post} />
                                </div>
                            ))
                        }
                    </div>
                ) :(<p>No Blog Found</p>)
            )
         }
    </div>
  )
}
