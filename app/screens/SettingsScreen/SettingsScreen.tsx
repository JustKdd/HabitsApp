import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/types";
import { useUser } from "@/hooks/useUser";

const SettingsScreen: React.FC = () => {
  const { logout, user } = useUser();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleLogout = async () => {
    try {
      await logout();
      navigation.navigate("index");
    } catch (error) {
      console.error("Error logging out:", error);
      Alert.alert(
        "Logout Error",
        "An error occurred while logging out. Please try again."
      );
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>Adjust your Settings! {user?.displayName}</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#333",
  },
  logoutButton: {
    backgroundColor: "#d9534f",
    padding: 12,
    borderRadius: 8,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default SettingsScreen;
