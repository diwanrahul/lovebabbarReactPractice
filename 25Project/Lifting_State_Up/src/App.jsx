import { useEffect, useState } from 'react'

import './App.css'
import Child from './Child'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
        
    console.log("inside App component")
}, [count]);
  const fetch = (data)=>{
    console.log("inside fetch function")
    setCount(data);
  }
  return (
    <>
    <Child fetch={fetch} count={count}/>
    <h1>{count}</h1>
    </>
  )
}

export default App
