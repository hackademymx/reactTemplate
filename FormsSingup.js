import React from 'react';
import useForms from './useForms';
import { Icon } from '@iconify/react';
import Logo from '../imagenes/Logo.png';

const FormsSingup = ({submitForm}) => {

  const {handleChange, handleFormSubmit, values, errors} = useForms(submitForm);

  return (
    <div className='container'>
        <div className='app-wrapper'>
            <div>
                <img className='logo' src={Logo} />
                <h2 className='title'>Crear Cuenta</h2>
            </div>
            <form className='form-wrapper'>
                <div className='email'>
                    <label className='label'>Correo Electronico</label> <Icon icon="mdi:email-outline" />
                    <input className='input' type="email" name='email' value={values.email} onChange={handleChange} />
                    {errors.email && <p className = "error">{errors.email}</p>}
                </div>
                <div className='password'>
                    <label className='label'>Contraseña</label> <Icon icon="mdi:lock-outline" />
                    <input className='input' type="password" name='password' value={values.password} onChange={handleChange} />
                    {errors.passsword && <p className = "error">{errors.passsword}</p>}
                </div>
                <div className='password2'>
                    <label className='label'>Confirmar Contraseña</label> <Icon icon="mdi:lock-outline" />
                    <input className='input' type="password" name='password2' value={values.password2} onChange={handleChange} />
                    {errors.passsword && <p className = "error">{errors.passsword}</p>}
                </div>
                <div>
                    <button className='submit' onClick={handleFormSubmit}>Registrarse
                    </button>
                    <br />
                    <span className='form-input-login'>Ya tienes cuenta? Inicia Sesion<a href='./FormsLogIn'> Aqui</a></span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FormsSingup