import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Popup from './components/loginpopup/Popup'

function App() {
  const [showpopup, setShowPopup] = useState(false)


  return (
    <>
      {showpopup ? <Popup showpopup={showpopup} setShowPopup={setShowPopup} /> : ""}
      <div className="home">
        <Navbar showpopup={showpopup} setShowPopup={setShowPopup} />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
