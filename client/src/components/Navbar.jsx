import React from 'react'
import { Link } from 'react-router-dom';

function Navbar({user}) {
  return (
    <div class="navbar">
        <span className="logo"><Link to='/'>Social Auth</Link></span>
        {user ? 
        <ul className='list'>
            <li className='listItem'>
                <img src="" alt="" className='avatar' />
            </li>
            <li className="listItem">Login</li>
            <li className="listItem">Sign Up</li>
        </ul>
        : <Link className='listItem' to='/login'>Login</Link> }
    </div>
  )
}

export default Navbar;