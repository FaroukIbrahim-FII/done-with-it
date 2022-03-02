import React from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";

import AppButton from "../components/AppButton";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";
import AppPicker from "../components/AppPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().min(1).required().label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.string().required().nullable(),
});

const categories = [
  { title: "Furniture", value: 1 },
  { title: "Clothing", value: 2 },
  { title: "Camera", value: 3 },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(items) => console.log(items)}
        validationSchema={validationSchema}
      >
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
});

export default ListingEditScreen;
