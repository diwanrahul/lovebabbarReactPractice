/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import baseUrl from "../baseUrl";
import {useNavigate} from 'react-router-dom'
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const navigate = useNavigate();

 

  const fetchBlogPosts = async (page = 1, tag= null, category) => { 
    // const baseUrl = 'https://codehelp-apis.vercel.app/api/get-blogs';

  let url = `${baseUrl}?page=${page}`;
  if(tag){
    url += `&tag=${tag}`
  }

  if(category){
    url += `&category=${category}`;
  }
    try {
      const res = await fetch(url);
      const data = await res.json();
      if(!data.posts || data.posts.length === 0){
        throw new Error("Something went Wrong in API")
      }

      // console.log("API response : ", data);
      setPage(data.page);
      setTotalPage(data.totalPages);
      setPosts(data.posts);
      // console.log(data);
    } catch (error) {
      // console.log(error);
      setPage(1);
      setPosts([]);
      setTotalPage(null);
    }
    setLoading(false);
  };

  const handlePageChange = (page) => {
    navigate({search: `page=${page}`});
    setPage(page);
    // fetchBlogPosts(page);
  };

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPage,
    setTotalPage,
    fetchBlogPosts,
    handlePageChange,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
