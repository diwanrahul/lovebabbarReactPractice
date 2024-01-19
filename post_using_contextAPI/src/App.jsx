/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import './App.css'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import Header from './components/Header'
import { useContext, useEffect,  } from 'react'
import { AppContext } from './context/AppContext'
import {Routes, Route , useSearchParams, useLocation} from 'react-router-dom';
import HomePage from './pages/HomePage'
import TagPage from './pages/TagPage'
import CategoryPage from './pages/CategoryPage'
import BlogPage from './pages/BlogPage'


function App() {
 const {fetchBlogPosts} = useContext(AppContext);
 const [searchParams, setSearchParams] = useSearchParams();
 const location = useLocation();


 useEffect(() => {
 const page = searchParams.get("page") ?? 1;  

 if(location.pathname.includes("tags")){
  //iska mtlb tag wala page show krna h
  const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
  fetchBlogPosts(Number(page), tag);
 }else if(location.pathname.includes("categories")){
  const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
  fetchBlogPosts(Number(page), null, category); 
 }
 else{
  fetchBlogPosts(Number(page));
 }
 },[location.pathname, location.search])

  return (
   <div>

    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/blog/:blogId' element={<BlogPage />} />
      <Route path='/tags/:tag' element={<TagPage />} />
      <Route path='/categories/:category' element={<CategoryPage />} />

    </Routes>
   </div>
  )
}

export default App
