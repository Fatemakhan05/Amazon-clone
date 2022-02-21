import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS4mpQg_RsuPIs0ZCKD0VACulv1juXqhg",
  authDomain: "fir-eb61d.firebaseapp.com",
  projectId: "fir-eb61d",
  storageBucket: "fir-eb61d.appspot.com",
  messagingSenderId: "477343860658",
  appId: "1:477343860658:web:92f6e9a9f5f527a27b06ab",
  measurementId: "G-6NLQLHP9R9",
};
// const auth =firebase.auth();
// export {auth};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
