import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcrG1TEl6Q4C1Nsu0BJJ0HlZZzcqUNHVc",
  authDomain: "controle-rnc.firebaseapp.com",
  projectId: "controle-rnc",
  storageBucket: "controle-rnc.firebasestorage.app",
  messagingSenderId: "949786734068",
  appId: "1:949786734068:web:1f6e27f35449907a7a1da1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
