import React, { useReducer, useState } from "react";
import { reducer } from "./reducer";
import { actions } from "./reducer/actions";
import { initialState } from "./reducer/constants";

export const FormExample = () => {
  //   const [variable, setVariable] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  //   Funcion para controlar los cambios en el formulario
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: actions.UPDATE_FORM_DATA,
      payload: {
        name: name,
        value: value,
      },
    });
  };
  return (
    <div className="page__container">
      <form>
        <label for="name">Nombre</label>
        <input
          type="text"
          name="name"
          placeholder="Ingresa el nombre"
          value={state.formData.name}
          onChange={handleFormChange}
        />
        <label for="name">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Ingresa el email"
          value={state.formData.email}
          onChange={handleFormChange}
        />
        <button type="submit">Editar user</button>
      </form>
    </div>
  );
};
