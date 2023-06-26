import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import user from '../images/user2.png'

export default function Header() {
    return (
        <>        
        <div className='header'>
        <Link to="/"> 
        <h1 className='logo'>Movie App</h1>
        </Link>
        <div className='user-image'>
            <img src={user} alt="user" />            
        </div>
        </div>
        </>

    )
}
