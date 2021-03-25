import firebase from 'firebase/app';
import 'firebase/firebase-analytics';
import 'firebase/firebase-database';

var firebaseConfig = {
    apiKey: "AIzaSyDP78cZKfh1T9Y6l3fN3zmawc1BJLG1RwY",
    authDomain: "test-493f2.firebaseapp.com",
    databaseURL: "https://test-493f2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-493f2",
    storageBucket: "test-493f2.appspot.com",
    messagingSenderId: "604898703573",
    appId: "1:604898703573:web:f3ba83bad0af14bd1cca5c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;