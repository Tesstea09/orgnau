import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_mpke7gV1AEvlWknT-_QbRRWVcy9-AcE",
    authDomain: "scicon-777.firebaseapp.com",
    projectId: "scicon-777",
    storageBucket: "scicon-777.appspot.com",
    messagingSenderId: "503304747129",
    appId: "1:503304747129:web:21c679d6211584d5547ca8",
    measurementId: "G-MD3XPQNY18"
  };

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

console.log("Firebase connected");
export { db };