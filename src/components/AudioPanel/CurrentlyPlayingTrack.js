import { Stack, Typography } from "@mui/material";
import React from "react";

function CurrentlyPlayingTrack({ track }) {
  return (
    <Stack flex={1} direction="row" gap={2} alignItems="center">
      <img
        height="56px"
        src={track?.albumImage}
        alt={track?.name}
        loading="lazy"
        style={{ borderRadius: "2px" }}
      />
      <Typography variant="span">{track?.name}</Typography>
    </Stack>
  );
}

export default CurrentlyPlayingTrack;
