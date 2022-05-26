import { newUserTypes } from '../types/types';

const initialState ={
  users : []
}

const newUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case newUserTypes.ADD_USER:
      return {
        users: [action.payload]
      }
    case newUserTypes.GET_USER:
      return {
        users: [...action.payload]
      }
    default:
      return state
  }
}

export default newUserReducer;
