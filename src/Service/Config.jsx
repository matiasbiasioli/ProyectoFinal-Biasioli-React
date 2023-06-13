// Import the functions you need from the SDKs you need
import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "tienda-de-vinos-d68db.firebaseapp.com",
  projectId: "tienda-de-vinos-d68db",
  storageBucket: "tienda-de-vinos-d68db.appspot.com",
  messagingSenderId: "587183283607",
  appId: "1:587183283607:web:84d187c78b0222c5ef38d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)