// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxrzUppvoaFXZQ37UUaMwScb3TzQQ5OPo",
  authDomain: "smileeveryday-4bb6f.firebaseapp.com",
  projectId: "smileeveryday-4bb6f",
  storageBucket: "smileeveryday-4bb6f.appspot.com",
  messagingSenderId: "2236289567",
  appId: "1:2236289567:web:b3b7e33a442927d8847b2a",
  measurementId: "G-G598RWH9YN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
