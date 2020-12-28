import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAYsmKdr_RBkC9kKonv7ND5rE1Tv_mmcjE",
    authDomain: "arts-f6508.firebaseapp.com",
    databaseURL: "https://arts-f6508.firebaseio.com",
    projectId: "arts-f6508",
    storageBucket: "arts-f6508.appspot.com",
    messagingSenderId: "823678945922",
    appId: "1:823678945922:web:292e08fd2bba826f6b029b",
    measurementId: "G-F17Y8Y35M1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };

