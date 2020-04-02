

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBMhzFe08oXpxD0I1BX8F18F4tq6mdCM3s",
    authDomain: "hust-chat-51ff6.firebaseapp.com",
    databaseURL: "https://hust-chat-51ff6.firebaseio.com",
    projectId: "hust-chat-51ff6",
    storageBucket: "hust-chat-51ff6.appspot.com",
    messagingSenderId: "617474700283",
    appId: "1:617474700283:web:a5a815d818dce5a479915e",
    measurementId: "G-TYJXWSSZ39"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
 
  export default firebaseApp.firestore();
 