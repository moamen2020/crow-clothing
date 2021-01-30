import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBo4CVo-h_oIWhmxnb0vGHw2X1opzee4Ck",
  authDomain: "crow-clothing-7bc4d.firebaseapp.com",
  projectId: "crow-clothing-7bc4d",
  storageBucket: "crow-clothing-7bc4d.appspot.com",
  messagingSenderId: "820861876995",
  appId: "1:820861876995:web:e5d621329efd9a7d168736",
  measurementId: "G-65JBE5C62Y",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
