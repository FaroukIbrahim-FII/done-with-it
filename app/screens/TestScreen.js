import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";

const Tweets = ({ navigation: { navigate } }) => (
  <Screen>
    <Text>This is the tweets page</Text>
    <Button
      title="view the tweet"
      onPress={() => navigate("TweetDetails", { id: "1" })}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>This is the tweet details screen {route.params.id}</Text>
  </Screen>
);

const Account = () => (
  <Screen>
    <Text>Account page</Text>
  </Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={
        (({ route }) => ({
          title: route.params.id,
        }),
        { headerStyle: { backgroundColor: "tomato" } })
      }
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: "tomato",
      tabBarActiveTintColor: "white",
      tabBarInactiveBackgroundColor: "#eee",
      tabBarInactiveTintColor: "black",
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Feed"
      component={StackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="account-circle"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

function TestScreen(props) {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TestScreen;
