import React, { useEffect } from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import { ErrorMessage } from ".";

function AppFormPicker({ items, name, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectedItem={(item) => {
          setFieldValue(name, item.title);
        }}
        selectedItem={values[name]}
        placeholder={placeholder}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
