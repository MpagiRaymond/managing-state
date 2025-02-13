import React from 'react'
import Login from './components/Login.jsx'
import './App.css'
import Inputfields from './components/inputfields.jsx'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './components/Styles/Topmenu.css'

const App = () => {
  return (
    <>
    <Router>
      <nav>
        <ul>
            <li>
                <Link to="/">Engineers</Link>
            </li>
            <li>
              <Link to="/Login">programers</Link>
            </li>
        </ul>
      </nav>

      <div className="major">
        <Routes>
          <Route exact path="/" element={<Inputfields/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App;