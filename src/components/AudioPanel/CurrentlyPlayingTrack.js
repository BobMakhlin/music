import { Skeleton, Stack, Typography } from "@mui/material";
import React from "react";

function CurrentlyPlayingTrack({ track }) {
  return (
    <Stack flex={1} direction="row" gap={2} alignItems="center">
      {!track && (
        <>
          <Skeleton
            variant="rectangular"
            animation={false}
            width={56}
            height={56}
          />
          <Skeleton 
            variant="rectangular"
            animation={false}
            width="35%"
            height={10}
          />
        </>
      )}
      {track && (
        <>
          <img
            height={56}
            src={track?.albumImage}
            alt={track?.name ?? "album"}
            loading="lazy"
            style={{ borderRadius: "2px" }}
          />
          <Typography variant="span">{track?.name}</Typography>
        </>
      )}
    </Stack>
  );
}

export default CurrentlyPlayingTrack;
