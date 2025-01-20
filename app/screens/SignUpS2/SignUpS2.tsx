import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useUser } from "@/hooks/useUser";

const SignUpScreen2: React.FC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [messageType, setMessageType] = useState("positive");
  const { user, updateUserProfile } = useUser();

  const handleSubmit = async () => {
    if (!name || !surname || !age || !gender || !messageType) {
      Alert.alert("Missing Fields", "Please fill in all the required fields.");
      return;
    }

    try {
      await updateUserProfile({
        uid: user?.uid || "",
        name,
        surname,
        age: Number(age),
        gender,
        messageType,
      });
      Alert.alert("Success", "Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      Alert.alert("Error", "Failed to update profile. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Complete Your Profile</Text>

      <TextInput
        placeholder="First Name"
        placeholderTextColor="#000"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Surname"
        placeholderTextColor="#000"
        style={styles.input}
        value={surname}
        onChangeText={setSurname}
      />
      <TextInput
        placeholder="Age"
        placeholderTextColor="#000"
        style={styles.input}
        value={age}
        keyboardType="number-pad"
        onChangeText={setAge}
      />
      <Text style={styles.label}>Gender</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[
            styles.radioButton,
            gender === "male" && styles.radioSelected,
          ]}
          onPress={() => setGender("male")}
        >
          <Text style={styles.radioText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioButton,
            gender === "female" && styles.radioSelected,
          ]}
          onPress={() => setGender("female")}
        >
          <Text style={styles.radioText}>Female</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Message Preference</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[
            styles.radioButton,
            messageType === "positive" && styles.radioSelected,
          ]}
          onPress={() => setMessageType("positive")}
        >
          <Text style={styles.radioText}>Positive</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioButton,
            messageType === "harsher" && styles.radioSelected,
          ]}
          onPress={() => setMessageType("harsher")}
        >
          <Text style={styles.radioText}>Harsher</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#333",
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  radioButton: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    flex: 1,
    alignItems: "center",
    marginHorizontal: 4,
    backgroundColor: "#fff",
  },
  radioSelected: {
    backgroundColor: "#6200ea",
    borderColor: "#6200ea",
  },
  radioText: {
    color: "#333",
    fontWeight: "500",
  },
  submitButton: {
    backgroundColor: "#6200ea",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default SignUpScreen2;
