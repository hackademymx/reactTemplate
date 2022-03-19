import { actions } from "./actions";
import { initialState } from "./constants";

export const reducer = (state = initialState, action) => {
  // Permite evaluar o ejecutar una función en base a un caso de una condicional
  switch (action.type) {
    // Caso de actualizar email
    case actions.UPDATE_EMAIL:
      // Vamos a retornar
      return {
        ...state,
        email: action.payload,
      };
    case actions.UPDATE_NAME:
      // Vamos a retornar
      return {
        ...state,
        name: action.payload,
      };
    case actions.UPDATE_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
};
