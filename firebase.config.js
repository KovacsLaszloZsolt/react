import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqMGc9tMupNQfZHdSXQ0_Pnl8C_kAD18s",
  authDomain: "house-market-f64d6.firebaseapp.com",
  projectId: "house-market-f64d6",
  storageBucket: "house-market-f64d6.appspot.com",
  messagingSenderId: "335036163970",
  appId: "1:335036163970:web:6d787657dabf363ad7519b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
