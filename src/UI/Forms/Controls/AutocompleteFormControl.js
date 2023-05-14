import { Autocomplete, FormControl, FormHelperText } from "@mui/material";

const AutocompleteFormControl = ({ hasError, error, ...otherProps }) => {
  const formControlConfig = {
    fullWidth: true,
    error: hasError,
  };
  const helperTextStyle = hasError ? {} : { display: "none" };

  return (
    <FormControl {...formControlConfig}>
      <Autocomplete {...otherProps} />
      <FormHelperText style={helperTextStyle}>{error}</FormHelperText>
    </FormControl>
  );
};

export default AutocompleteFormControl;
