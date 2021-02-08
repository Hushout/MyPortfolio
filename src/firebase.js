import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyASJ8HiwGjoqcdbGLzt1KdFnpAA13Jq69s",
    authDomain: "react-contact-form-6dae4.firebaseapp.com",
    projectId: "react-contact-form-6dae4",
    storageBucket: "react-contact-form-6dae4.appspot.com",
    messagingSenderId: "360010717834",
    appId: "1:360010717834:web:1ea3148320c513e870ab73"

})

var db = firebaseApp.firestore();

export { db };