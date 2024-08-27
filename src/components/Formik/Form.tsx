import React, { Children, FC } from "react";
import { Formik } from "formik";

interface IFormProps<T> {
  initialValues: T;
  onSubmit: (values: T) => void;
  validationSchema?: any;
  children: React.ReactNode;
}

const Form: FC<IFormProps<object>> = ({
  initialValues,
  onSubmit,
  validationSchema = {},
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default Form;
