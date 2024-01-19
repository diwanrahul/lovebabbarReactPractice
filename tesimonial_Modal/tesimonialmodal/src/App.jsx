

import './App.css'
import Testimonial from './components/Testimonial'
import reviews from './data'
function App() {
  

  return (
    <div className='flex flex-col  h-[100vh] justify-center items-center bg-gray-200 '>
    <div className='text-center'>
      <h1 className='text-4xl font-bold'>Our Tesimonials</h1>
      <div className='bg-violet-400 h-[4px] w-[1/5] mt-1 '></div>
      <Testimonial reviews={reviews} />
    </div>
    </div>
  )
}

export default App
