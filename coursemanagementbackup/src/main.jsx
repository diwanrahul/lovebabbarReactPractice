
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { DarkModeContext } from './context/DarkModeContext.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DarkModeContext>
      <App />
    </DarkModeContext>
    <ToastContainer />
  </BrowserRouter>
);



