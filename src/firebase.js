// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsVSU1EKELvECn-PEzB4vbXuy9t9yD3Sw",
  authDomain: "clone-8795b.firebaseapp.com",
  projectId: "clone-8795b",
  storageBucket: "clone-8795b.appspot.com",
  messagingSenderId: "426473387530",
  appId: "1:426473387530:web:060ca1f3018973a13151f3",
  measurementId: "G-JBJ2JQSW39",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
