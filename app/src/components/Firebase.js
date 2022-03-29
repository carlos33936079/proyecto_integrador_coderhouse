import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoTuFokdPLEAA23RnLc0G1sAadJpUm2VE",
  authDomain: "proyecto-coder-90460.firebaseapp.com",
  projectId: "proyecto-coder-90460",
  storageBucket: "proyecto-coder-90460.appspot.com",
  messagingSenderId: "729319740278",
  appId: "1:729319740278:web:2cfbf81b5bb3759b076057"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);