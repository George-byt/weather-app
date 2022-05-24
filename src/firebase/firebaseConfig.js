import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth';
import { FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDP8g7Jpvj7SkT4Om5bX4clr7z1avgkx80",
  authDomain: "weather-app-93bd2.firebaseapp.com",
  projectId: "weather-app-93bd2",
  storageBucket: "weather-app-93bd2.appspot.com",
  messagingSenderId: "421894210099",
  appId: "1:421894210099:web:4fffdf396cf287e3391946"
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

export {
  app,
  google,
  facebook
}
