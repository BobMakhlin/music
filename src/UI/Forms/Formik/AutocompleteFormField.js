import { useField } from "formik";
import { useCallback } from "react";
import AutocompleteFormControl from "../Controls/AutocompleteFormControl";

const AutocompleteFormField = ({ fieldName, ...otherProps }) => {
  const [field, meta, { setTouched, setValue }] = useField(fieldName);

  const handleBlur = useCallback(() => {
    setTouched(true, true);
  }, [setTouched]);
  const handleChange = useCallback(
    (_, value) => {
      setValue(value);
    },
    [setValue]
  );

  const hasError = Boolean(meta && meta.touched && meta.error);
  const autocompleteProps = {
    ...otherProps,
    ...field,
    onBlur: handleBlur,
    onChange: handleChange,
    hasError,
    error: meta.error,
  };

  return <AutocompleteFormControl {...autocompleteProps} />;
};

export default AutocompleteFormField;
