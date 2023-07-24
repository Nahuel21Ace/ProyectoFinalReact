import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYDSNKwtIRDhw9gvYT4YzMWG9zCF3xBr4",
  authDomain: "prueba1-b12ff.firebaseapp.com",
  projectId: "prueba1-b12ff",
  storageBucket: "prueba1-b12ff.appspot.com",
  messagingSenderId: "29377239706",
  appId: "1:29377239706:web:281ab47df2329e0bdf9d23",
  measurementId: "G-V9JWVW32ES"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

