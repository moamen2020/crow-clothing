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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAT = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAT,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
