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
  apiKey: "AIzaSyA1fbvzqK5OJDZdPNn00teEzrU1S42ERGM",
  authDomain: "unify-a8e0a.firebaseapp.com",
  projectId: "unify-a8e0a",
  storageBucket: "unify-a8e0a.appspot.com",
  messagingSenderId: "475938716705",
  appId: "1:475938716705:web:0376bcfda73b78aabdf760",
  measurementId: "G-T7M2BJ5CTF",
};

const app = initializeApp(firebaseConfig);
const appleProvider = new OAuthProvider("apple.com");

const auth = getAuth();

const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider, appleProvider, signInWithPopup, signOut };
