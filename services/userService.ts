import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { User } from "../model/user";
import { db } from "../firebase";

export const saveUserProfile = async (
  user: Omit<User, "id">
): Promise<string | null> => {
  try {
    const docRef = await addDoc(collection(db, "users"), user);
    console.log("User created with ID:", docRef.id);
    return docRef.id; // Return the auto-generated ID
  } catch (error) {
    console.error("Error saving user profile:", error);
    return null;
  }
};

export const getUserProfile = async (userId: string): Promise<User | null> => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { ...(docSnap.data() as User) } as User;
    } else {
      console.log("No such user!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};

export const updateUserProfile = async (
  userId: string,
  data: Partial<User>
): Promise<void> => {
  try {
    const docRef = doc(db, "users", userId);
    await updateDoc(docRef, data);
    console.log("User profile updated successfully!");
  } catch (error) {
    console.error("Error updating user profile:", error);
  }
};
