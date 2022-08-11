import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyCPYQ7o0hPxFMP59DJi6wbKI6Nz2533fOU",
    authDomain: "letmeask-fb7d9.firebaseapp.com",
    databaseURL: "https://letmeask-fb7d9-default-rtdb.firebaseio.com",
    projectId: "letmeask-fb7d9",
    storageBucket: "letmeask-fb7d9.appspot.com",
    messagingSenderId: "76628920046",
    appId: "1:76628920046:web:612859824db17a6e0ed5ff"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();