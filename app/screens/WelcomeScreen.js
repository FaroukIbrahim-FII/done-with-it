import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  tagLine: {
    paddingVertical: 20,
    fontSize: 25,
    fontWeight: "600",
  },
});

export default WelcomeScreen;
