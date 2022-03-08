import React from "react";
import { View, StyleSheet, TouchableOpacity, Platform } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import routes from "./routes";

const NewListingButton = () => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigate(routes.LISTING_ADD)}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={40}
          color={colors.white}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 40,
    borderColor: colors.white,
    borderWidth: 10,
    bottom: Platform.OS === "android" ? 30 : 20,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
});

export default NewListingButton;
