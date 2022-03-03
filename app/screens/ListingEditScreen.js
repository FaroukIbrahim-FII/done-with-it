import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

import AppButton from "../components/AppButton";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";
import AppPicker from "../components/AppPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import * as imagePicker from "expo-image-picker";
import Icon from "../components/Icon";
import colors from "../config/colors";
import FormImagePicker from "../components/forms/FormImagePicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().min(1).required().label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.string().required().nullable(),
  images: Yup.array().min(1, "Please choose an image."),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    title: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    title: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    title: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    title: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    title: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    title: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    title: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    title: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    title: "Other",
    value: 9,
  },
];

function ListingEditScreen(props) {
  const [imageUri, setImageUri] = useState([]);
  const getCameraRollPermission = async () => {
    const result = await imagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted) alert("you need to enable image selection");
  };
  const getImageUri = async () => {
    try {
      const imageUriList = [...imageUri];
      const result = await imagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        imageUriList[imageUriList.length] = result.uri;
        setImageUri(imageUriList);
      }
    } catch (error) {
      console.log("Error getting the image uri");
    }
  };
  useEffect(() => {
    getCameraRollPermission();
  }, []);
  return (
    <Screen style={styles.container}>
      {/* <View style={styles.card}>
        <FlatList
          data={imageUri}
          keyExtractor={(item) => item.index}
          horizontal
          inverted
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} />
          )}
        />
        <TouchableWithoutFeedback onPress={getImageUri}>
          <View style={styles.cameraButton}>
            <Icon
              name="camera"
              size={80}
              iconColor={colors.mediumGrey}
              backgroundColor={colors.lightGrey}
            />
          </View>
        </TouchableWithoutFeedback> */}
      {/* </View> */}
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(items) => console.log(items)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />

        <AppFormField name="title" maxLength={255} placeholder="Title" />
        <AppFormField
          name="price"
          keyboardType="numeric"
          maxLength={8}
          placeholder="Price"
        />
        <AppFormPicker
          name="category"
          items={categories}
          numOfColums={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
        />
        <AppFormField
          name="description"
          placeholder="Description"
          maxLength={255}
          multiline
          numberOfLines={3}
        />
        <SubmitButton title="Submit" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    flexDirection: "row",
  },
  cameraButton: {
    padding: 20,
    backgroundColor: colors.lightGrey,
    width: "30%",
    alignItems: "center",
    borderRadius: 15,
  },
  image: {
    padding: 30,
    backgroundColor: colors.lightGrey,
    width: 80,
    height: "100%",
    alignItems: "center",
    borderRadius: 15,
    marginRight: 10,
  },
});

export default ListingEditScreen;
