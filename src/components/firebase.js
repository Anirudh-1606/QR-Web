import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDiW5fqgjHh1VBL-N26vps2RppnlP2B7kc",
  authDomain: "qr-menu-app-45549.firebaseapp.com",
  projectId: "qr-menu-app-45549",
  storageBucket: "qr-menu-app-45549.appspot.com",
  messagingSenderId: "447181607020",
  appId: "1:447181607020:web:d66f9a3ee9744e8722c849",
  measurementId: "G-9HD4HW4XG6",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
const storage = firebase.storage();
export { storage, firebase as default };
