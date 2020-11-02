import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBKSYcXojuR3BHINUbOecGsF-rwIe22yXI",
  authDomain: "catch-of-the-day-try-2.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-try-2.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
