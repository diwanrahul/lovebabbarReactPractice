import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

function App() {
  

  return (
    <>
     <div>
      <nav className="navbar navbar-expand navbar-dark  bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={`/`} className="nav-link" >Home</Link>
          </li>
          <li className="nav-item">
            <Link to={`/create`} className="nav-link" >Create</Link>
          </li>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
     </div>
    </>
  )
}

export default App
