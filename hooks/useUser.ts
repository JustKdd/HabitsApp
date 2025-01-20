import { useEffect, useState } from "react";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import {
  getUserProfile,
  updateUserProfile as updateProfileInDB,
} from "../services/userService";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase";

export const useUser = () => {
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userProfile = await getUserProfile(firebaseUser.uid);
        const userWithProfile = userProfile
          ? { ...firebaseUser, ...userProfile }
          : firebaseUser;
        setUser(userWithProfile); // Update the user state
        console.log("Logged in user:", userWithProfile);
      } else {
        setUser(null); // Set to null if no user is logged in
        console.log("No user logged in");
      }
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      console.log("Logged in user:", userCredential.user);
      return userCredential;
    } catch (error) {
      console.error("Error logging in:", error);
      return null;
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      console.log("Registered user:", userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error("Error registering:", error);
      return null;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("User logged out");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const updateUserProfile = async (data: { [key: string]: any }) => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      console.error("No user is logged in.");
      return;
    }

    try {
      await updateProfileInDB(currentUser.uid, data);
      setUser({ ...currentUser, ...data });
      console.log("User profile updated:", { ...currentUser, ...data });
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  return { user, login, register, logout, updateUserProfile };
};
