import { authTypes } from "../types/types";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case authTypes.LOGIN:
      return {
        email: action.payload.email,
        password: action.payload.password
      }
    case authTypes.LOGOUT:
      return {
      }
    case authTypes.REGISTER:
      return {
        name: action.payload.name,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: action.payload.password,
        password2: action.payload.password2
      }
    default:
      return state
  }
}

export default authReducer;
