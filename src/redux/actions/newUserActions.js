import { newUserTypes } from "../types/types";
import { addDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const getUserAsync = () => {
  return async (dispath) => {
    const listCollection = await getDocs(collection(db, "users"))
    console.log(listCollection)
    const users = []
    listCollection.forEach(lista => {
      users.push({
        ...lista.data()
      })
    })
    dispath(getUsersSync(users))

  }

}

export const getUsersSync = (user) => {
  return {
    type: newUserTypes.GET_USER,
    payload: user
  }
}

export const newUserAdd = (user) => {
  return async (dispatch) => {
    addDoc(collection(db, 'users'), user)
      .then(resp => {
        dispatch(newUserAddAction(user))
        console.log('Usuario agregado');
      })
      .catch(err => {
        console.warn(err, 'El usuario no se pudo agregar');
      })
  }
}

export const newUserAddAction = (user) => {
  return {
    type: newUserTypes.ADD_USER,
    payload: user
  }
}
