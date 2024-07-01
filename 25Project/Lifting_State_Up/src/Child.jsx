import React, {useEffect} from 'react'
import GrandChild from './GrandChild'

const Child = ({fetch, count}) => {
   
    useEffect(() => {
        
        console.log("inside child component")
    }, [count]);
  return (
    <div>
        <GrandChild fetch={fetch} count={count} />
        {count}
    </div>
  )
}

export default Child