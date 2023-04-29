import { TextField } from "@mui/material";
import React from "react";

function SearchInput({ value, onChange, inputRef }) {
  return (
    <TextField
      id="search"
      variant="standard"
      value={value}
      onChange={onChange}
      sx={{ mb: 4, mt: 1 }}
      inputRef={inputRef}
      fullWidth
    />
  );
}

export default SearchInput;
