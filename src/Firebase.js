// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADxCZAQxx5VOFrWmeQnYOu2tH5c82hXIw",
  authDomain: "flowmart-9b5e2.firebaseapp.com",
  projectId: "flowmart-9b5e2",
  storageBucket: "flowmart-9b5e2.firebasestorage.app",
  messagingSenderId: "483968490183",
  appId: "1:483968490183:web:beb66701290a9562e8fce2",
  measurementId: "G-ZY4J97TT9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 


export {auth};