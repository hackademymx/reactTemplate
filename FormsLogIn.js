import React, { useState } from "react";

const SignupForm = () => {
  const [values, setValues] = useState({
    nombrecompleto: "",
    correoelectrónico: "",
    contraseña: "",
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (undefined) => {
    undefined.preventDefault();
  };
  return (
    <>
      <div className="container">
        <div className="app-wrapper"></div>
        <h2 className="title"> Crear Cuenta</h2>
      </div>

      <form className="form-wrapper">
        <div className="nombre">
          <label className="label">Nombre Completo</label>
          <input
            className="input"
            type="text"
            name="Nombre Completo"
            values="values"
            onChange={handleChange}
          />
        </div>
        <div className="email">
          <label className="label">Email</label>
          <input
            className="input"
            type="email"
            name="Correo electrónico"
            values="values"
            onChange={handleChange}
          />
        </div>

        <div className="contraseña">
          <label className="label">Contraseña</label>
          <input
            className="input"
            type="contraseña"
            name="contraseña"
            values="values"
            onChange={handleChange}
          />
        </div>
        <button className="Registrar" onClick={handleFormSubmit}>
          Inicar Sesion
        </button>
        <div> Signup Form</div>
      </form>
    </>
  );
};
export default SignupForm;
