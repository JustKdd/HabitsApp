import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For tab icons
import SettingsScreen from "../SettingsScreen/SettingsScreen";

// Screens for each tab
const HomeScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.text}>Welcome to HabitApp!</Text>
  </View>
);

const HabitsScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.text}>Track your Habits!</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.text}>This is your Profile!</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const MainScreen: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Habits") {
            iconName = "checkmark-circle";
          } else if (route.name === "Profile") {
            iconName = "person";
          } else if (route.name === "Settings") {
            iconName = "settings";
          } else iconName = "body";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#6200ea",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Habits" component={HabitsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
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
    fontWeight: "600",
    color: "#333",
  },
});

export default MainScreen;
