import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'



  var firebaseConfig = {
    apiKey: "AIzaSyBWh1Xn6DzLgcqPrARN1ojAdSEaxlocubg",
    authDomain: "registro-clientes-agua.firebaseapp.com",
    databaseURL: "https://registro-clientes-agua.firebaseio.com",
    projectId: "registro-clientes-agua",
    storageBucket: "registro-clientes-agua.appspot.com",
    messagingSenderId: "516418672177",
    appId: "1:516418672177:web:75de15ce3b1438436a2710"
  };
  // Initialize Firebases
  firebase.initializeApp(firebaseConfig);

// var db = firebase.firestore();

// db.collection("users").add({
//   first: "Ada",
//   last: "Lovelace",
//   born: 1815
// })
// .then(function(docRef) {
//   console.log("Document written with ID: ", docRef.id)
// })
// .catch(function(error) {
//   console.error("Error adding document: ", error)
// })


ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
