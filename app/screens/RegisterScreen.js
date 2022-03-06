import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms/";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="account"
          placeholder="Name"
          icon="account"
          textContentType="username"
          name="username"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="Email"
          icon="email"
          textContentType="emailAddress"
          name="email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          icon="lock"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 50,
  },
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
