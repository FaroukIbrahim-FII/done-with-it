// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  Alert,
  Button,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import CardScreen from "./app/screens/CardsScreens";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import TestScreen from "./app/screens/TestScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import AuthNavigation from "./app/navigation/AuthNavigation";
import AppNavigation from "./app/navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import defaultTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigation";

export default function App() {
  return (
    <NavigationContainer theme={defaultTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
