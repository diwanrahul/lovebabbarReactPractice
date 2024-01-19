import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
export default function Filter({ filterData,  setCategory }) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const filterHandler = (index, title) => {
    setCategory(title);
    setSelectedItemIndex(index);
    // console.log('changed category');
  };

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-x-4 mx-auto py-4 justify-center'>
      {filterData.map((data, index) => (
        <NavLink
          to='/'
          key={index}
          onClick={() => filterHandler(index, data.title)}
          className={`${selectedItemIndex === index ? 'text-bold outline-2 text-white text-xl' : ''} hover:text-white`}
        >
          {data.title}
        </NavLink>
      ))}
      
      {filterData.length > 0 && (
        <NavLink
          to='/calendar'
          onClick={() => {
            setCategory(filterData[filterData.length - 1].title);
            setSelectedItemIndex(filterData.length - 1);
          }}
        >Calendar
        </NavLink>
      )}
    </div>
  );
}

Filter.propTypes = {
  filterData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      // Add more specific PropTypes for other properties if needed
    })
  ).isRequired,
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};