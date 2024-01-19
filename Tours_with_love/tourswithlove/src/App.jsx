import  { useState } from 'react';
import './App.css';
import Tours from './components/Tours';
import data from './data';
import removeTourContext from './components/context'; 


function App() {
  const [tours, setTours] = useState(data);

  const removeTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  const refresh = () => {
    setTours(data);
  }

  return (
    <removeTourContext.Provider value={removeTour}>
      <div className='App'>
       {
        tours.length === 0 
        ?  <div>
          <h1>No posted</h1>
          <button className='btn-white' onClick={refresh}>
            Refresh
          </button>
          </div>
        : <Tours tours={tours} />
       } 
      </div>
     </removeTourContext.Provider>
  );
}

export default App;
