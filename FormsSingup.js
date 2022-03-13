import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import useForm from './useForms';


const FormsSingup = () => {

  const {handleChange, values, handleSubmit} = useForm();

  return (
    <div className='form-content-right'>
      <form className='forms' onSubmit={handleSubmit}>
        <h1>Crear cuenta.</h1>
        <div className='logo'>
          <img src='./imagenes/logo.png'></img>
        </div>
        <div className='forms-inputs'>
          <label htmlFor='email' className='form-lable' /> 
          <input type='email'name='email' className='forms-input' placeholder='Introduce tu correo electronico' values={values.email}
          onChange={handleChange}  /> <Icon icon='carbon:email' />
        </div>

        <div className='forms-inputs'>
          <label htmlFor='password' className='form-lable' />
          <input id='password' type='password' name='password' className='forms-input' placeholder='Introduce contraseña' alues={values.password}
          onChange={handleChange}/> <Icon icon='arcticons:nc-passwords' />
        </div>

        <div className='forms-inputs'>
          <label htmlFor='password2' className='form-lable' />
          <input id='password2' type='password' name='password2' className='forms-input' placeholder='Confirmar Contraseña' alues={values.password2}
          onChange={handleChange}/> <Icon icon='arcticons:nc-passwords' />
        </div>
        <button className='forms-input-btn' type='submit'>Crear cuenta.</button>
        <span className='forms-input-login'>Ya tienes cuenta? <a href='#'>Iniciar Sesion</a></span>

        <div onChange={(e) => this.setState({theme: e.target.value})}>
          <span>Selecione el tipo:</span>
              <input type="radio" name="theme" value="Empleador"/>Empleador
              <input type="radio" name="theme" value="Solicitante"/>Solicitante
        </div>
        </form>
    </div>
  
  )
}

export default FormsSingup;