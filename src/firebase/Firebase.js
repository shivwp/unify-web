import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import "firebase/auth";
import { OAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDezJWdcq5-psXFQJjWZIo-CF1aGWcu4rw",
  authDomain: "unifyclientapp.firebaseapp.com",
  projectId: "unifyclientapp",
  storageBucket: "unifyclientapp.appspot.com",
  messagingSenderId: "691890923145",
  appId: "1:691890923145:web:ee78fdf86c6fcbfaa74858",
  measurementId: "G-2GQEW8TEEG",
};

const app = initializeApp(firebaseConfig);
const appleProvider = new OAuthProvider("apple.com");

const auth = getAuth();

const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider, appleProvider, signInWithPopup, signOut };
