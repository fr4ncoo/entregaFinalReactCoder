import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFozk34tSqbn-_XfbWp3RZflNEVVZllZc",
  authDomain: "shopping-bd705.firebaseapp.com",
  projectId: "shopping-bd705",
  storageBucket: "shopping-bd705.firebasestorage.app",
  messagingSenderId: "916330959896",
  appId: "1:916330959896:web:45245491d1d48e76d15f6d"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Firestore
export const db = getFirestore(app);

// auth
const auth = getAuth(app);
signInAnonymously(auth)
  .then(() => {
    console.log(" sesion anonima check");
  })
  .catch((error) => {
    console.error(" No se pudo iniciar sesion anonima!", error);
  });
