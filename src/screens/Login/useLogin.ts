import axios from "axios";
import { router } from "expo-router";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "First Name must be at least 6 characters"),
});

const initialValues = {
  email: "shramistha@aviteushealthcare.co.uk",
  password: "sIYA9125",
};
export const useLogin = () => {
  const [isLogging, setIsLogging] = useState(false);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  async function onSubmit(values: any) {
    setIsLogging(true);
    try {
      const { data } = await axios.post("dummy", values);
      router.replace("/(drawer)/");
    } catch (error: any) {
      console.log("==>", error.response.data.error);
      if (error?.response?.data?.error?.email) {
        formik.setFieldError("email", error?.response?.data?.error?.email);
      }
      if (error?.response?.data?.error?.password) {
        formik.setFieldError(
          "password",
          error?.response?.data?.error?.password
        );
      }
      if (error?.response?.data?.error?.disabled) {
        // todo: show toast
      }
    } finally {
      setIsLogging(false);
    }
  }

  return {
    state: { formik, isLogging, validationSchema },
    action: { onSubmit },
  };
};
