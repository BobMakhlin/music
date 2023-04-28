import { Stack, Typography } from "@mui/material";
import React from "react";

function Track({ name, albumImage, duration }) {
  return (
    <Stack direction="row" alignItems="center">
      <img src={albumImage} alt={name} loading="lazy" />
      <Typography variant="h6" fontWeight={300} ml={1}>
        {name}
      </Typography>
      <Typography variant="span" ml="auto">
        {duration?.minutes}:{duration?.seconds}
      </Typography>
    </Stack>
  );
}

export default Track;
