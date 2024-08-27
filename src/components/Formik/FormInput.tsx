import { Text, View } from "react-native";
import React from "react";
import { Input, InputProps } from "@ui-kitten/components";
import {
  useFormikContext,
  FormikValues,
  FormikErrors,
  FormikTouched,
  useFormik,
} from "formik";

interface FormInputProps extends InputProps {
  name: string;
  formik: ReturnType<typeof useFormik>;
}
export const FormInput = ({ name, label, formik }: FormInputProps) => {
  // const { handleChange, handleBlur, values, errors, touched } =
  //   useFormikContext<FormikValues & FormikErrors<any> & FormikTouched<any>>();
  const caption = (
    formik.touched[name] && formik.errors[name] ? formik.errors[name] : ""
  ) as string;
  return (
    <View>
      <Input
        label={label}
        value={formik.values[name]}
        onChangeText={formik.handleChange(name)}
        onBlur={formik.handleBlur(name)}
        status={
          formik.touched[name] && formik.errors[name] ? "danger" : "basic"
        }
        size="large"
        caption={caption}
      />
    </View>
  );
};

export default FormInput;
