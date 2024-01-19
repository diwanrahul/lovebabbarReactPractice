/* eslint-disable no-unused-vars */
import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Pagination() {
  const {page, handlePageChange, totalPage} = useContext(AppContext);
// console.log(totalPage, page);
  return (
    <div>
      <div>
        {
          page > 1 &&
          <button onClick={() => handlePageChange(page-1)}>
            Previous
          </button>
        }

        {
          page < totalPage &&
          <button onClick={() => handlePageChange(page+1)}>
            Next
          </button>
        }
        <p>
          Page {page} of {totalPage}
        </p>
      </div>
    </div>
  )
}
