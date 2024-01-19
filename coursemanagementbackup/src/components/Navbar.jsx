import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import the arrow-left icon
import { NavLink } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext';
import { useContext } from 'react';
// import CalendarComponent from './CalendarComponent';

export default function Navbar(props) {
  const handleGoBack = () => {
    window.history.back();
  };
  const {isDarkMode} = useContext(DarkModeContext)

  return (
    <div className=''>
      <nav className='bg-purple-700 py-4 w-full flex justify-center'>
        
        <FontAwesomeIcon className={`top-5 cursor-pointer text-2xl left-8 absolute ${isDarkMode ? " text-black": "text-white"} `} icon={faArrowLeft} onClick={handleGoBack} /> 
        <h1 className={`text-3xl font-boldinline-block ${isDarkMode ? " text-black": "text-white"}`}><NavLink to='/'>Top Courses</NavLink></h1>
        
        <button className={`font-semibold text-lg absolute top-4 right-8 flex gap-8 items-center ${isDarkMode ? " text-black": "text-white"}`}
        ><NavLink to="/register" >Register</NavLink>
        <NavLink to="/login" >LogIn</NavLink>
          <FontAwesomeIcon icon={props.isDarkMode ? faSun : faMoon} onClick={() => props.setIsDarkMode(!props.isDarkMode)} />
        </button>
      </nav>
    </div>
  );
}


Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
};