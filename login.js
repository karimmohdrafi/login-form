// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRukp_vtQBVxHxYzDcit_Gtf7Pi3sntHg",
  authDomain: "login-form-6044b.firebaseapp.com",
  projectId: "login-form-6044b",
  storageBucket: "login-form-6044b.firebasestorage.app",
  messagingSenderId: "121608293398",
  appId: "1:121608293398:web:57d9758488e018477eb937",
  measurementId: "G-LP0ZVC34JB"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const auth = getAuth();
const submit = document.getElementById("submit")
submit.addEventListener('click', function (event){
    event.preventDefault()
    const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("LogIn Successfully")
    window.location.href="home.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})

