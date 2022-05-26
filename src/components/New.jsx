import React from "react";
import { useDispatch } from 'react-redux'
import useForm from '../hooks/useForm';
import { newUserAdd } from "../redux/actions/newUserActions";

const New = () => {

  const dispatch = useDispatch();

  const [formValue, handleInputChange, rest] = useForm({
    email: '',
    password: '',
    name: '',
    lastName: ''
  })

  const { email, password, name, lastName } = formValue

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValue)
    dispatch(newUserAdd(formValue))
    rest()
  }

  return (
    <section className='userForm-section m-5'>
      <h1 className='text-capitalize text-center'>add new user</h1>
      <form onSubmit={handleSubmit}>
      <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='name'
            name='name'
            id='name'
            value={name}
            onChange={handleInputChange}
            placeholder='Name'
            className='form-control' />
        </div>
        <div className='mb-3'>
          <label htmlFor='lastName' className='form-label'>
            Last Name
          </label>
          <input
            type='lastName'
            name='lastName'
            id='lastName'
            value={lastName}
            onChange={handleInputChange}
            placeholder='Last Name'
            className='form-control' />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
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
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={handleInputChange}
            placeholder='Password'
            className='form-control' />
        </div>
        <button type='submit' className='btn btn-success'>
          Send
        </button>
      </form>
    </section>
  )
}

export default New;
