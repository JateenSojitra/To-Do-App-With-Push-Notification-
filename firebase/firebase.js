// fristfirebaseproject-fb0dbs
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL9jMhzZKqEmQEh1GC3vtGPfJoYhJf27Y",
  authDomain: "fristfirebaseproject-fb0db.firebaseapp.com",
  projectId: "fristfirebaseproject-fb0db",
  storageBucket: "fristfirebaseproject-fb0db.appspot.com",
  messagingSenderId: "490834359663",
  appId: "1:490834359663:web:e390266ab326342fd7a49a",
  measurementId: "G-3L2HM3PMS9"
};

// const validkey = "BDQcXS8sSA9BQgiFRu2-0aLx0galzcCOoIns8U3ablqXlmKXevBSQz_nv6G0_gWVeeeu-EM1A03_xKN-T4tAegw"
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);