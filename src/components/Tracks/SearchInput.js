import { Chip, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import { useCallback } from "react";
import { useState } from "react";

const ShortcutChip = ({ isVisible }) => {
  const style = isVisible ? {} : { display: "none" };

  return (
    <InputAdornment position="end" style={style}>
      <Chip
        sx={{ mr: 0.5 }}
        label={
          <Typography variant="caption" sx={{ fontWeight: 700 }}>
            Shift Shift
          </Typography>
        }
        size="small"
      />
    </InputAdornment>
  );
};

function SearchInput({ value, onChange, inputRef }) {
  const [shortcutIsVisible, setShortcutIsVisible] = useState(true);

  const handleFocus = useCallback(() => {
    setShortcutIsVisible(false);
  }, []);
  const handleBlur = useCallback(() => {
    setShortcutIsVisible(true);
  }, []);

  return (
    <TextField
      id="search"
      variant="standard"
      value={value}
      onChange={onChange}
      sx={{ mb: 3, mt: 1 }}
      inputRef={inputRef}
      fullWidth
      onFocus={handleFocus}
      onBlur={handleBlur}
      InputProps={{
        endAdornment: <ShortcutChip isVisible={shortcutIsVisible} />,
      }}
    />
  );
}

export default SearchInput;
