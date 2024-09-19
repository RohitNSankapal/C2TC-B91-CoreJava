import React from 'react';
import {Link} from 'react-router-dom'

const NavBar=()=>{
    return(
        <nav className='nav'>
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/cust" className='nav-link'> Customers</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/abt" className='nav-link'>About</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/cont" className='nav-link'>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;
