import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCbjcSamDIB7dqly_cHQyTWtgc80UdqEuU",
  authDomain: "crwn-react-app-db.firebaseapp.com",
  databaseURL: "https://crwn-react-app-db.firebaseio.com",
  projectId: "crwn-react-app-db",
  storageBucket: "crwn-react-app-db.appspot.com",
  messagingSenderId: "1097878663746",
  appId: "1:1097878663746:web:e558c6096f728b8cebf3db",
  measurementId: "G-404JS0BWWV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
