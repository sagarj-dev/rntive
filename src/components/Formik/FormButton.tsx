import React from "react";
import { ButtonProps, Button } from "@ui-kitten/components";
import {
  FormikErrors,
  FormikTouched,
  FormikValues,
  useFormikContext,
} from "formik";

interface FormButtonProps extends ButtonProps {
  btnText: string;
  onSubmit: (values: any) => void;
}

const FormButton = ({ btnText, onSubmit, ...otherProps }: FormButtonProps) => {
  // const { handleSubmit } = useFormikContext<
  //   FormikValues & FormikErrors<any> & FormikTouched<any>
  // >();
  return (
    // @ts-ignore
    <Button {...otherProps} onPress={onSubmit}>
      {btnText}
    </Button>
  );
};

export default FormButton;
