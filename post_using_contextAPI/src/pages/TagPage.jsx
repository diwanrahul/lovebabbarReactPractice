/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import {useLocation, useNavigate} from 'react-router-dom';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
export default function TagPage() {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header />
        <div>
            <button
            onClick={() => navigation(-1)}>
                back
            </button>
            <h2>
                Blogs Tagged <span>#{tag}</span>
            </h2>
        </div>
        <Blogs />
        <Pagination />
    </div>
  )
}