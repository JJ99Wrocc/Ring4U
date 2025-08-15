import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // <-- dodane

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

// Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

// Firestore
export const db = getFirestore(app); // <-- dodane
