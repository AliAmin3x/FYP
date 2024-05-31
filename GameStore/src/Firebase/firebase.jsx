// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANuLkQzbuIsviO00O0ZReHlqfKM5Ti6Xc",
  authDomain: "nexgen-arcade.firebaseapp.com",
  databaseURL: "https://nexgen-arcade-default-rtdb.firebaseio.com",
  projectId: "nexgen-arcade",
  storageBucket: "nexgen-arcade.appspot.com",
  messagingSenderId: "659903222105",
  appId: "1:659903222105:web:abd56cd87edd0287f63c48",
  measurementId: "G-JGVND2STT6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, analytics };
