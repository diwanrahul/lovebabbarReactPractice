import React,{useEffect} from 'react'

const GrandChild = ({fetch, count}) => {
    useEffect(() => {
        
        console.log("inside grand child component")
    }, [count]);
  return (
    <div><input type="text" value={count} onChange={(e)=>fetch(e.target.value)} />
    {count}</div>
  )
}

export default GrandChild