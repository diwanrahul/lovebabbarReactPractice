/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

export default function HomePage() {
  return (
    <div>
        <Header />
        <div>
            <Blogs />
            <Pagination />
        </div>
    </div>
  )
}
