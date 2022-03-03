import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  Button,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
} from "react-native";
import colors from "../config/colors";
import Card from "../components/Card";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppPicker from "../components/AppPicker";
import * as imagePicker from "expo-image-picker";
import Icon from "../components/Icon";
import ImageInput from "../components/ImageInput";
import ImageInputList from "../components/ImageInputList";

const itemsList = [
  { title: "Furniture", value: 1 },
  { title: "Clothing", value: 2 },
  { title: "Cameras", value: 3 },
];

function CardScreen(props) {
  const [firstName, setFirstName] = useState("");
  const [category, setCategory] = useState(itemsList[0].title);
  const [imageUris, setImageUris] = useState([]);

  const onAddImage = (uri) => {
    setImageUris([...imageUris, uri]);
  };
  const onDeleteImage = (uri) => {
    setImageUris(imageUris.filter((item) => item !== uri));
  };

  return (
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectedItem={(item) => setCategory(item.title)}
    //     items={itemsList}
    //     placerholder="Category"
    //     icon="apps"
    //   />
    //   <AppTextInput placeholder="Username" icon="email" />
    // </Screen>
    // <View style={styles.card}>
    //   <FlatList
    //     data={imageUri}
    //     keyExtractor={(item) => item.index}
    //     horizontal
    //     inverted
    //     renderItem={({ item }) => (
    //       <Image source={{ uri: item }} style={styles.image} />
    //     )}
    //   />
    //   <TouchableWithoutFeedback onPress={getImageUri}>
    //     <View style={styles.cameraButton}>
    //       <Icon
    //         name="camera"
    //         size={80}
    //         iconColor={colors.mediumGrey}
    //         backgroundColor={colors.lightGrey}
    //       />
    //     </View>
    //   </TouchableWithoutFeedback>
    // </View>

    <View style={styles.card}>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={onAddImage}
        onDeleteImage={onDeleteImage}
      />
      {/* <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // backgroundColor: colors.lightGrey,
    padding: 20,
    paddingTop: 100,
    flexDirection: "row",
  },
  cameraButton: {
    padding: 30,
    backgroundColor: colors.lightGrey,
    width: "35%",
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

export default CardScreen;
