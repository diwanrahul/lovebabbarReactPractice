import React from 'react'
import HighlightText from '../Homepage/HighlightText'

export default function Quote() {
  return (
    <div>
        We are passionate about revolutionizzing the way we learn. Out innovative platform
        <HighlightText text={"Combines technology"} />
        <span className='text-brown-500'>
            {" "} expertise
        </span>
    , and community to create an
    <span className='text-brown-500'>
    {" "}  unparalleled educational experience.
    </span>
    </div>
  )
}
