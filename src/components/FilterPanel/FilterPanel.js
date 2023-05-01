import { Autocomplete, Box, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function FilterPanel() {
  return (
    <Stack sx={{ gridArea: "rightbar", pl: 1, pr: 1, pt: 5 }} gap={1}>
      <Autocomplete
        id="artist"
        size="small"
        disablePortal
        options={[]}
        fullWidth
        renderInput={(params) => (
          <TextField label="Artist" variant="filled" {...params} />
        )}
      />
      <Autocomplete
        id="genre"
        size="small"
        disablePortal
        options={[]}
        fullWidth
        renderInput={(params) => (
          <TextField label="Genre" variant="filled" {...params} />
        )}
      />
      <Autocomplete
        id="album"
        size="small"
        disablePortal
        options={[]}
        fullWidth
        renderInput={(params) => (
          <TextField label="Album" variant="filled" {...params} />
        )}
      />
    </Stack>
  );
}

export default FilterPanel;
