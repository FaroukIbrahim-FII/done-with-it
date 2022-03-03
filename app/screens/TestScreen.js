import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen from "../components/Screen";

const Tweets = ({ navigation: { navigate } }) => (
  <Screen>
    <Text>This is the tweets page</Text>
    <Button title="view the tweet" onPress={() => navigate("Tweet Details")} />
  </Screen>
);

const TweetDetails = ({ navigation }) => (
  <Screen>
    <Text>This is the tweet details screen</Text>
  </Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="Tweet Details" component={TweetDetails} />
  </Stack.Navigator>
);

function TestScreen(props) {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TestScreen;
