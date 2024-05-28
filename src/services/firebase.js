import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const VITE_API_KEY = import.meta.env.VITE_API_TEST;

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: "online-psychological-support.firebaseapp.com",
  projectId: "online-psychological-support",
  storageBucket: "online-psychological-support.appspot.com",
  messagingSenderId: "925910714545",
  appId: "1:925910714545:web:a211a3e1a54c42a9ce7a90",
  databaseURL:
  'https://online-psychological-support-default-rtdb.europe-west1.firebasedatabase.app',
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);