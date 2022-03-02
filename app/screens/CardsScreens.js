import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import colors from "../config/colors";
import Card from "../components/Card";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppPicker from "../components/AppPicker";

const itemsList = [
  { title: "Furniture", value: 1 },
  { title: "Clothing", value: 2 },
  { title: "Cameras", value: 3 },
];

function CardScreen(props) {
  const [firstName, setFirstName] = useState("");
  const [category, setCategory] = useState(itemsList[0].title);
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectedItem={(item) => setCategory(item.title)}
        items={itemsList}
        placerholder="Category"
        icon="apps"
      />
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
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
