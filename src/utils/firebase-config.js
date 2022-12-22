import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAZqI_W-2SzzK04XlBAqkKgz-ejlIK-NHg",
  authDomain: "netflix-clone-b1782.firebaseapp.com",
  projectId: "netflix-clone-b1782",
  storageBucket: "netflix-clone-b1782.appspot.com",
  messagingSenderId: "690155093606",
  appId: "1:690155093606:web:ab9a21f4cf9b71b560b7a7",
  measurementId: "G-NRYEFKZKCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);