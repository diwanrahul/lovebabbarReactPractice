import React from 'react'

export default function HighlightText({text}) {
  return (
    <>
        <span className='font-bold text-richblue-100'>
          {" "}  {text}
        </span>
    </>
  )
}