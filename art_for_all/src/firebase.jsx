import React from 'react';
import firebase, {storage} from 'firebase';

var config = {
    apiKey: "AIzaSyBhd0wO2Bvzd3ZgDEROLg4lHCbOy4l9Hjw",
    authDomain: "bazart-6b8a5.firebaseapp.com",
    databaseURL: "https://bazart-6b8a5.firebaseio.com",
    projectId: "bazart-6b8a5",
    storageBucket: "bazart-6b8a5.appspot.com",
    messagingSenderId: "873184868112"
  };

firebase.initializeApp(config);
const storage = firebase.storage();
  
module.exports = {firebase, storage};