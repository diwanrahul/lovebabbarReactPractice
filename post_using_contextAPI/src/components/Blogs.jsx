/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import Card from './Card';
import BlogDetails from './BlogDetails';
export default function Blogs() {
    const {loading, posts} = useContext(AppContext);
  return (
    <div>
      
        {
            loading 
            ? (<Spinner />)
            :(
                posts.length === 0 
                ? (<div><p>No post Found</p></div>)
                : (
                          posts.map((post) =>{
                           return <BlogDetails key={post.id} post={post}/>
                         })
                  )
            ) 
        }
    </div>
  )
}
