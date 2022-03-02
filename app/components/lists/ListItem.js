import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import colors from "../../config/colors";
import AppText from "../AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItem({
  image,
  name,
  subTitle,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.name}>{name}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color={colors.mediumGrey}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    borderRadius: 35,
    width: 70,
    height: 70,
  },
  name: {
    fontWeight: "500",
    textAlign: "left",
  },
  subTitle: {
    color: colors.mediumGrey,
  },
});

export default ListItem;
