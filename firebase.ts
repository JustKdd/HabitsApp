import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDb44-59VqHz6bcpUPB_qU1dyvzmTsGYw0",
  authDomain: "everydayhabitapp.firebaseapp.com",
  projectId: "everydayhabitapp",
  storageBucket: "everydayhabitapp.appspot.com",
  messagingSenderId: "787373394534",
  appId: "1:787373394534:web:0afe2376243e7909967ba7",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
export const db = getFirestore(app);

export { auth };
export default app;
