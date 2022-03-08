import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ presentation: "modal" }}>
    <Stack.Screen
      name={routes.FEED_LIST}
      component={ListingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
