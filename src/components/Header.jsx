import React from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { logoutAsync } from "../redux/actions/authActions";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className='bg-dark mb-5'>
      <div className='container d-flex justify-content-between p-3'>
        <div>
          <h1 className='text-white'>Weather App</h1>
        </div>
        <ul className='nav'>
          <li className='nav-item'>
            <Link to='/' className='nav-link text-white fs-4'>Home</Link>
          </li>
          <li className='nav-item'>
            <button type="button" className='btn text-warning fs-4' onClick={() => dispatch(logoutAsync())}>
              Salir
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;
