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
import AuthNavigator from "./app/navigation/AuthNavigation";
import AppNavigation from "./app/navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import defaultTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigation";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import { useState } from "react";
import authStorage from "./app/auth/storage";
import AppLoading from "expo-app-loading";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState();

  const getUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={getUser}
        onFinish={() => setIsReady(true)}
        onError={() => console.log("Error starting the app")}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={defaultTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}

        {/* */}
      </NavigationContainer>
      {/* <CardScreen /> */}
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
