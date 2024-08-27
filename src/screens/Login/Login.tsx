import { View, StyleSheet } from "react-native";
import React from "react";
import Form from "@/src/components/Formik/Form";
import FormInput from "@/src/components/Formik/FormInput";
import FormButton from "@/src/components/Formik/FormButton";
import { Text } from "@ui-kitten/components";
import { useLogin } from "./useLogin";

const Login = () => {
  const {
    state: { formik, isLogging, validationSchema },
    action: { onSubmit },
  } = useLogin();

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text category="h2">Login to Gogle</Text>
        {/* <Form
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        > */}
        <FormInput label="Email" name="email" formik={formik} />
        <FormInput label="Password" name="password" formik={formik} />
        <FormButton
          btnText="Login"
          disabled={isLogging}
          onSubmit={formik.handleSubmit}
        />
        {/* </Form> */}
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  formContainer: {
    gap: 16,
  },
});
