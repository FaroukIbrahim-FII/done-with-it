import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import Card from "../components/Card";

function CardScreen(props) {
  return (
    <View style={styles.card}>
      <Card
        title="Red jacket for sale"
        subTitle="$100"
        image={require("../assets/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.lightGrey,
    padding: 20,
    paddingTop: 100,
  },
});

export default CardScreen;
