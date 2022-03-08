import React from "react";
import { View, StyleSheet } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import colors from "../config/colors";
import AppText from "./AppText";
import Constants from "expo-constants";

function OfflineNotice(props) {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    top: Constants.statusBarHeight,
    zIndex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
