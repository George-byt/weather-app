import React, { useState } from 'react';
import '../styles/Login.css';
import { useDispatch } from 'react-redux';
import { authAsync, authGoogle, authFacebook } from '../redux/actions/authActions';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

const Login = () => {

  const dispatch = useDispatch()

  const [ formValue, setFormValue ] =  useState({});

  const handleInputChange = ( { target } ) => {
    setFormValue({
      ...formValue,
      [ target.name ]: target.value
    })
  }

  const rest = () => {
    setFormValue(
      ...formValue({})
    )
  }

  const { email, password } = formValue

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValue);
    dispatchEvent(authAsync(email, password))
    rest()
  }

  return (
    <section className='login-section d-flex justify-content-center align-items-center'>
      <div className='container w-50'>
        <h1 className='text-center'>Login</h1>
        <form className='' onChange={handleSubmit}>
          <div className='mb-3'>
            <label
              htmlFor='email'
              className='form-label'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={handleInputChange}
              placeholder='Email'
              className='form-control' />
          </div>
          <div className='mb-3'>
            <label
              htmlFor='password'
              className='form-label'>Contraseña</label>
            <input
              type='password'
              name='password'
              id='password'
              value={password}
              onChange={handleInputChange}
              placeholder='Contraseña'
              className='form-control' />
          </div>
        </form>
        <div>
          <button type='button' className='btn btn-light d-block m-auto mb-3 w-50' onClick={() => dispatch(authGoogle())}><FcGoogle /></button>
          <button type='button' className='btn btn-primary d-block m-auto mb-3 w-50' onClick={() => dispatch(authFacebook())}><BsFacebook /></button>
          <Link to='/register'><p className='text-center'>Si no tienes una cuenta, puedes registrarte.</p></Link>
        </div>
      </div>
    </section>
  )
}

export default Login;
