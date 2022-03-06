import React from "react";
import { Image, View, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/thumbnail.jpeg")}
            name="Farouk Ibrahim"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    marginVertical: 10,
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
