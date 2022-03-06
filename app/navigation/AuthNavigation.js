import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import defaultTheme from "./navigationTheme";
import routes from "./routes";

const Stack = createNativeStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.WELCOME} component={WelcomeScreen} />
    <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
    <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
  </Stack.Navigator>
);

function AuthNavigation(props) {
  return (
    <NavigationContainer theme={defaultTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default AuthNavigation;
