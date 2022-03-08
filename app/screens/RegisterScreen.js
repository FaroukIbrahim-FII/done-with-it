import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import authApi from "../api/auth";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms/";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [registerFailed, setRegisterFailed] = useState(false);
  const { logIn } = useAuth();

  const registerApi = useApi(authApi.register);
  const loginApi = useApi(authApi.login);

  const handleSubmit = async ({ email, password, username }) => {
    const response = await registerApi.request(username, email, password);

    if (!response.ok) return setRegisterFailed(true);

    setRegisterFailed(false);
    const loginResponse = await loginApi.request(
      response.data["email"],
      response.data["password"]
    );
    logIn(loginResponse.data);
  };
  return (
    <>
      <ActivityIndicator visible={loginApi.loading || registerApi.loading} />
      <Screen style={styles.container}>
        <ErrorMessage
          error="The email used is already registered"
          visible={registerFailed}
        />
        <AppForm
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
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
    </>
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
