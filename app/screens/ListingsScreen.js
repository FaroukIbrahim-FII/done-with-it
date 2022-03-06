import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";

import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listing";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    request();
  }, []);

  const request = async () => {
    const response = await listingsApi.getListings();

    if (!response.ok) {
      alert("there was an error");
      return;
    }
    setListings(response.data);
  };

  return (
    <Screen style={styles.card}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            image={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.lightGrey,
    padding: 20,
    flex: 1,
    // paddingTop: 100,
  },
});

export default ListingsScreen;
