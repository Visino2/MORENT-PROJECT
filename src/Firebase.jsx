import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, GoogleAuthProvider, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSIuBIpxUE4M7wof7U56f5DfCkAtCqJ9M",
  authDomain: "car-rent-b4bba.firebaseapp.com",
  projectId: "car-rent-b4bba",
  storageBucket: "car-rent-b4bba.firebasestorage.app",
  messagingSenderId: "286530111691",
  appId: "1:286530111691:web:25fbb01f85d551c484334e",
  measurementId: "G-SSFH1WQB94",
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

setPersistence( auth, browserLocalPersistence);

export { auth, provider, db };
