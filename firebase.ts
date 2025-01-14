import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDb44-59VqHz6bcpUPB_qU1dyvzmTsGYw0",
  authDomain: "everydayhabitapp.firebaseapp.com",
  projectId: "everydayhabitapp",
  storageBucket: "everydayhabitapp.appspot.com",
  messagingSenderId: "787373394534",
  appId: "1:787373394534:web:0afe2376243e7909967ba7",
};

const app = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);

export default app;
