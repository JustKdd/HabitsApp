import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import WelcomeScreen from "../../screens/WelcomeScreen/WelcomeScreen";

const Stack = createStackNavigator<RootStackParamList>(); // Pass the types here

const App: React.FC = () => {
  return <WelcomeScreen></WelcomeScreen>;
};

export default App;
