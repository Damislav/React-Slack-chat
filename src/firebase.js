// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQvgnWtZ8g2RzavoI1-f42OPPjxlXa8fo",
  authDomain: "react-slack-clone-45da1.firebaseapp.com",
  databaseURL: "https://react-slack-clone-45da1-default-rtdb.firebaseio.com",
  projectId: "react-slack-clone-45da1",
  storageBucket: "gs://react-slack-clone-45da1.appspot.com",
  messagingSenderId: "974526272594",
  appId: "1:974526272594:web:c58e5e503ff47227813b8b",
  measurementId: "G-R444FJDRPM",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
