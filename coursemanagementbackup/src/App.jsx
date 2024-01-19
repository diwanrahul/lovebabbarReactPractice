import { Routes, Route } from 'react-router-dom';
import CourseDetails from "./pages/CourseDetail";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import { useState } from 'react';
import { DarkModeContext } from './context/DarkModeContext'; 
import RegistrationForm from './components/RegistrationForm';
// import RegistrationForm from './demo/RegistrationForm';
import LoginForm from './components/LoginForm';
import Filter from './components/Filter';
import { filterData } from "./data/CourseCategory";
import Calendar from './components/Calendar';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cat, setCat] = useState(filterData[0].title);

  const updatingCategory = (category) => {
    setCat(category);
    console.log("category set", cat);
  }

  return (
    <div className="min-h-screen flex flex-col"
      style={{
        backgroundColor: isDarkMode ? "#414141" : "white"
      }}
    >
    
      <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <div className=' '>
          <div className='navbar'>
            <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
          </div>
          <div className="bg-purple-400 filter ">
            <Filter
              filterData={filterData}
              category={cat}
              setCategory={setCat}
            />
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Home updatingCategory={updatingCategory} category={cat} />} />
          <Route path="/courseDetails" element={<CourseDetails />} />
          <Route path='/register' element={<RegistrationForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/calendar' element={<Calendar />} />
        </Routes>
      </DarkModeContext.Provider> 
     
    </div>
  );
}

export default App;
