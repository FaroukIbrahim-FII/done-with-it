import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import { ErrorMessage } from ".";

function AppFormPicker({
  items,
  name,
  numOfColums,
  PickerItemComponent,
  placeholder,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numOfColums={numOfColums}
        onSelectedItem={(item) => {
          setFieldValue(name, item);
        }}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        placeholder={placeholder}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
