
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router'
import Login from './components/auth/Login'
import Register from './components/auth/register/Register'
import Attendancepage from './components/pages/Attendancepage'
import Home from './components/pages/Home'
import PDFViewer from "@diwanrahul419/reactpdfviewer"

function App() {
 

  return (
    <>
      <Navbar />
      <PDFViewer fileUrl="sirpptx_compressed.pdf" />
    <Routes>
      <Route path='/'>
      <Route exact path='/' Component={Home}/>
      <Route path='login' Component={Login} />
      <Route path='attendance' Component={Attendancepage} />
      <Route path='register' Component={Register} />
      </Route>
    </Routes>
      {/* <DropDownmenu /> */}
    </>
  )
}

export default App
