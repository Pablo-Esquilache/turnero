// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products thttps://www.gstatic.com/firebasejs/9.18.0/hat you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCTEmKg_Arq6ZYaHTJ0kxf5iNGz11Twk4w",
    authDomain: "login-turnos.firebaseapp.com",
    projectId: "login-turnos",
    storageBucket: "login-turnos.appspot.com",
    messagingSenderId: "456048910792",
    appId: "1:456048910792:web:7361e4522b34a9912660fd"
  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
