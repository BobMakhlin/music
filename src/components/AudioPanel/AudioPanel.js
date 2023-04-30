import { Box, Stack } from "@mui/material";
import React from "react";
import MuiAudioPlayer from "mui-audio-player-plus";
import { useCurrentTrack } from "../../store/track-context";
import CurrentlyPlayingTrack from "./CurrentlyPlayingTrack";

function AudioPanel() {
  const currentTrack = useCurrentTrack();

  return (
    <Stack
      sx={{
        padding: 2,
        gridArea: "audioplayer",
      }}
      bgcolor="background.dark"
      direction="row"
    >
      <CurrentlyPlayingTrack track={currentTrack} />

      <Box flex={2}>
        <MuiAudioPlayer
          id="player"
          containerWidth={350}
          display="timeline"
          inline
          src={currentTrack?.previewUrl}
        />
      </Box>
    </Stack>
  );
}

export default AudioPanel;
