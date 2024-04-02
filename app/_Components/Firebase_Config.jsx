// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDU4gttl-OqXevwHSg3jcazm0_OnVB6ecY",
  authDomain: "landingpage-e665c.firebaseapp.com",
  projectId: "landingpage-e665c",
  storageBucket: "landingpage-e665c.appspot.com",
  messagingSenderId: "479339938104",
  appId: "1:479339938104:web:aa3bd28ff66fa3b10001cd",
  measurementId: "G-84WSSGRWDN"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth(app)

export {auth,provider}