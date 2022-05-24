import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerAsync } from '../redux/actions/authActions';
import '../styles/Register.css';
import { useFormik } from "formik";
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const lowercaseRegex = /(?=.*[a-z])/;
  const uppercaseRegex = /(?=.*[A-Z])/;
  const [usuarioValido, setUsuarioValido] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
    },
    validationSchema: yup.object({
      name:
        yup.string().required("El Nombre es requerido").min(2, "Muy Corto"),
      lastName:
        yup.string().required("El Apellido es requerido").min(2, "Muy Corto"),
      email:
        yup.string().required("El Correo es requerido").email("Debe ser un correo valido Ej: blockMaster@gmail.com").lowercase("El Correo debe estar en letras minusculas"),
      password:
        yup.string().required("El Password es requerido").matches(lowercaseRegex, "Como minimo una Letra en minuscula").matches(uppercaseRegex, "Como minimo una Letra en Mayuscula").min(6, "Minimo 6 Caracteres").max(10, "Maximo 10 Caracteres"),
      password2:
        yup.string().oneOf([yup.ref("password")], "las contraseñas no son iguales").required("Se debe ingresar el password"),
    }),

    onSubmit: (formData) => {
      setUsuarioValido(true)
      console.log(formData);
      dispatch(registerAsync(formData.correo, formData.password));
    }
  })

  return (
    <section className='register-section'>
      <button type='button' className='btn align-self-start m-4' onClick={() => navigate(-1)}><MdArrowBack className=' fs-1' /></button>
      <div className='container d-flex flex-column'>
        <h1 className='text-center'>Register new account</h1>
        {!usuarioValido &&
          <form className='w-75 m-auto' onSubmit={formik.handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label' >Nombre</label>
              <input
                type='text'
                name='name'
                id='name'
                onChange={formik.handleChange}
                value={formik.values.name}
                isValid={formik.touched.name && !formik.errors.name}
                isInvalid={!!formik.errors.name}
                placeholder='Nombre'
                className='form-control' />
            </div>
            <div className='mb-3'>
              <label htmlFor='lastName' className='form-label' >Apellido</label>
              <input
                type='text'
                name='lastName'
                onChange={formik.handleChange}
                value={formik.values.lastName}
                isValid={formik.touched.lastName && !formik.errors.lastName}
                isInvalid={!!formik.errors.lastName}
                id='lastName'
                placeholder='Apellido'
                className='form-control' />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label' >Email</label>
              <input
                type='email'
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                isValid={formik.touched.email && !formik.errors.email}
                isInvalid={!!formik.errors.email}
                id='email'
                placeholder='Email'
                className='form-control' />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label' >Contraseña</label>
              <input
                type='password'
                name='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                isValid={formik.touched.password && !formik.errors.password}
                isInvalid={!!formik.errors.password}
                id='password'
                placeholder='Contraseña'
                className='form-control' />
            </div>
            <div className='mb-3'>
              <label htmlFor='password2' className='form-label' >Repetir Contraseña</label>
              <input
                type='password'
                name='password2'
                onChange={formik.handleChange}
                value={formik.values.password2}
                isValid={formik.touched.password2 && !formik.errors.password2}
                isInvalid={!!formik.errors.password2}
                id='password2'
                placeholder='Contraseña'
                className='form-control' />
            </div>
            <div className='mt-3 m-auto'>
              <button type='submit' className='btn btn-success m-3'>Create Account</button>
            </div>
          </form>
        }

      </div>
    </section>
  )
}

export default Register;
