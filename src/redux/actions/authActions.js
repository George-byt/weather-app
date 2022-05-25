import { getAuth, deleteUser, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signInWithPopup } from 'firebase/auth';
import { facebook, google } from '../../firebase/firebaseConfig';
import { authTypes } from '../types/types';

export const authAsync = (email, password) => {
  return (dispatch) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(authAsync(user.email, user.password))
        console.log('Usuario Autenticado');
      })
      .catch(error => {
        console.warn(error, 'Usuario No Autenticado');
      })
  }
}

export const authSync = (user, password) => {
  return {
    type: authTypes.LOGIN,
    payload: { user, password }
  }
}
// Authentication with Google
export const authGoogle = () => {
  return (dispatch) => {
    const auth = getAuth()
    signInWithPopup(auth, google)
      .then(({ user }) => {
        console.log(user, 'Usuario Autenticado');
      })
      .catch(error => {
        console.warn(error, 'Usuario No Autenticado')
      })
  }
}
// Authentication with facebook
export const authFacebook = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebook)
    .then(({ user }) => {
      // const credential = facebook.credentialFromResult(user);
      // const accessToken = credential.accessToken;
      console.log(user, 'Usuario Autenticado');
    })
    .catch(error => {
      console.warn(error, 'Usuario No Autenticado')
    })
  }
}

export const registerAsync = (email, password, name) => {
  return (dispatch) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        console.log(user)
        await updateProfile(auth.currentUser, { displayName: name })
        dispatch(registerSync(email, password, name))
        console.log('Usuario Registrado')
      })
      .catch(error => {
        console.warn(error, 'Usuario No Registrado')
      })
  }
}

export const registerSync = (email, password, name) => {
  return {
    type: authTypes.REGISTER,
    payload: {
      email, password, name
    }
  }
}

export const logoutAsync = () => {
  return (dispatch) => {
    const auth = getAuth()

    const userBorrar = auth.currentUser;
    console.log(userBorrar)

    deleteUser(userBorrar)
      .then(() => {
        console.log("usuario eliminado")
      })
      .catch(error => {
        console.warn("No se pudo eliminar", error)
      
      })
    signOut(auth)
      .then((user) => {
        dispatch(logout())

      })
      .catch(error => {
        console.warn(error)
      })
  }
}

export const logout = () => {
  return {
    type: authTypes.LOGOUT
  }
}
