import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import Icon from "./Icon";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
        <AppText style={styles.text}>{item.title}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  text: {
    textAlign: "center",
  },
});

export default CategoryPickerItem;
