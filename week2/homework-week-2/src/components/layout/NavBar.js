import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <h2 className='navbar-brand'>Homework WEEK-2</h2>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>
              Exercise1 <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/exercise2'>
              Exercise2
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/exercise3'>
              Exercise3
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
