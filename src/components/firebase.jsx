// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2RRFYvJlJnF6YdM7JxXMQ5w4_xaZSS7o",
  authDomain: "social-media-aba4c.firebaseapp.com",
  projectId: "social-media-aba4c",
  storageBucket: "social-media-aba4c.appspot.com",
  messagingSenderId: "1014852272329",
  appId: "1:1014852272329:web:6a71828345f699efaecd18"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);