import React from "react";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];
  const onAddImage = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };
  const onDeleteImage = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((item) => item !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={onAddImage}
        onDeleteImage={onDeleteImage}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
