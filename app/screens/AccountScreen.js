import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Icon from "../components/Icon";
import { ListItem, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import useAuth from "../auth/useAuth";

const menuItems = [
  {
    name: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    target: {
      name: "listing",
    },
  },
  {
    name: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    target: {
      name: "messages",
    },
  },
];

function AccountScreen({ navigation }) {
  const { user, setUser, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          name={user["name"]}
          subTitle={user["email"]}
          x
          image={require("../assets/thumbnail.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              name={item.name}
              onPress={
                item.target.name === "messages"
                  ? () => navigation.navigate(routes.MESSAGES)
                  : null
              }
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        name="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => logOut()}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.lightGrey,
  },
});

export default AccountScreen;
