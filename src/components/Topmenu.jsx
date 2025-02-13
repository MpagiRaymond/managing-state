import React from 'react'
import './Styles/Topmenu.css'
import {Link} from 'react-router-dom'
import Login from './Login'

const Topmenu = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Engineers</Link>
            </li>
            <li><Link to="/Login">programers</Link></li>
            {/* <li><Link to="">hacker</Link></li> */}
        </ul>
    </nav>
  )
}

export default Topmenu;