import { useState, useEffect, useContext} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';
import '../style/calendarstyle.css';
import { DarkModeContext } from '../context/DarkModeContext';
const Calendar = () => {
  const [festivals, setFestivals] = useState([]);
  const {isDarkMode} = useContext(DarkModeContext)

  useEffect(() => {
    const fetchIndianFestivals = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/calendar/v3/calendars/en.indian%23holiday%40group.v.calendar.google.com/events?key=AIzaSyCQR-uQtswjgH7JgYOkdfnOHWqo_kSPi0o');
        const eventData = response.data.items.map((event) => ({
          title: event.summary,
          start: event.start.date || event.start.dateTime,
          url: event.visibility, // URL to Google Calendar event page
          description: event.description || 'No description available'
        }));
        setFestivals(eventData);
      } catch (error) {
        console.error('Error fetching Indian festivals:', error);
      }
    };

    fetchIndianFestivals();
  }, []);
  

  return (
    
    <div  className='bg-orang-500 grid grid-cols-1 w-full h-8/12 overflow-hidden my-auto'>
      
      <div className={` ${isDarkMode ? "bg-blue-500"  : "bg-blue-400" } 
      ${isDarkMode ? "text-white"  : "text-black" } rounded-xl font-semibold p-3 ${isDarkMode ? "shadow-white"  : "shadow-black" }  shadow-lg 
        calenderDiv ml-[25%] `}>

     <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={festivals}
        eventClick={(clickInfo) => {
            const eventObj = clickInfo.event;
          if (eventObj.url) {
         
            alert(eventObj.title ); 
            clickInfo.jsEvent.preventDefault();    
          } 
        }}
      />
      </div>
     
    </div>
  );
};

export default Calendar;