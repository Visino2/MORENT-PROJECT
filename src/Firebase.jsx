import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCSIuBIpxUE4M7wof7U56f5DfCkAtCqJ9M",
  authDomain: "car-rent-b4bba.firebaseapp.com",
  projectId: "car-rent-b4bba",
  storageBucket: "car-rent-b4bba.firebasestorage.app",
  messagingSenderId: "286530111691",
  appId: "1:286530111691:web:25fbb01f85d551c484334e",
  measurementId: "G-SSFH1WQB94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();