import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";

const SignUpForm: React.FC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState<number | null>(null);
  const [gender, setGender] = useState<
    "male" | "female" | "non-binary" | "other" | ""
  >("");
  const [messagePreference, setMessagePreference] = useState<
    "positive" | "harsh" | ""
  >("");

  const handleSubmit = () => {
    if (!name || !surname || !email || !messagePreference) {
      Alert.alert("Missing Fields", "Please fill all the required fields.");
      return;
    }

    const userData = {
      id: Date.now(),
      name,
      surname,
      email,
      age,
      gender,
      messagePreference,
      createdAt: new Date(),
    };

    console.log("User Profile:", userData);

    Alert.alert(
      "Profile Created",
      "Your profile has been successfully created!"
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Your Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Surname"
        value={surname}
        onChangeText={setSurname}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Age (Optional)"
        value={age ? age.toString() : ""}
        keyboardType="numeric"
        onChangeText={(text) => setAge(Number(text) || null)}
      />

      <Text style={styles.label}>Select Gender (Optional):</Text>
      <View style={styles.buttonGroup}>
        {["male", "female", "non-binary", "other"].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              gender === option && styles.selectedButton,
            ]}
            onPress={() =>
              setGender(option as "male" | "female" | "non-binary" | "other")
            }
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Message Preference:</Text>
      <View style={styles.buttonGroup}>
        {["positive", "harsh"].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              messagePreference === option && styles.selectedButton,
            ]}
            onPress={() => setMessagePreference(option as "positive" | "harsh")}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Save Profile</Text>
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
    marginBottom: 8,
    color: "#555",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 24,
  },
  optionButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    minWidth: 80,
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#6200ea",
    borderColor: "#6200ea",
  },
  optionText: {
    color: "#fff",
    fontWeight: "bold",
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

export default SignUpForm;
