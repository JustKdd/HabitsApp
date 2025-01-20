import { useUser } from "@/hooks/useUser";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MainScreen from "../MainScreen/MainScreen";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";

const InitialPage = () => {
  const { user } = useUser();

  return user ? <MainScreen /> : <WelcomeScreen />;
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  loadingText: {
    fontSize: 18,
    color: "#666",
  },
});

export default InitialPage;
