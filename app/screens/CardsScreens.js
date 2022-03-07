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
import NetInfo from "@react-native-community/netinfo";

function CardScreen(props) {
  NetInfo.addEventListener((NetInfo) => console.log(NetInfo));

  return null;
}

export default CardScreen;
