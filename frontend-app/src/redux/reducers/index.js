import { LOGIN_IN, LOGIN_OUT } from '../type'

const initialState = {
  email: "",
  image: "",
  nombre: "",
  rol: "",
  libros_id: [],
  token: " "

};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_IN:
      console.log(state);
      return {
        ...state,
       
        email: action.payload.email,
        image: action.payload.image,
        nombre: action.payload.nombre,
        rol: action.payload.rol,
        token: action.payload.token

      };
    case LOGIN_OUT:
      console.log(state);
      return {
        ...state,
        email: null,
        image: null,
        nombre: null,
        rol: null,
        token: null
      };

    default:
      return state;

  };
}

export default rootReducer;
