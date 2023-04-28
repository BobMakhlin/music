import { useState } from "react";
import useMusicTracks from "../hooks/use-music-tracks";
import { useCallback } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import Track from "./Track";

const Tracks = () => {
  const [trackName, setTrackName] = useState("Bones");
  const { tracks, isLoading, error } = useMusicTracks({ name: trackName });

  const changeHandler = useCallback((event) => {
    setTrackName(event.target.value);
  }, []);

  let content;

  if (error) {
    content = <p>Error</p>;
  } else if (isLoading) {
    content = <p>Loading...</p>;
  } else {
    content = (
      <Stack direction="column" gap={1}>
        {tracks?.map((track) => (
          <Track
            key={track.id}
            name={track.name}
            albumImage={track.albumImage}
            duration={track.duration}
          ></Track>
        ))}
      </Stack>
    );
  }

  return (
    <Box>
      <TextField
        id="search"
        variant="standard"
        value={trackName}
        onChange={changeHandler}
        sx={{ mb: 4 }}
      />
      {content}
    </Box>
  );
};

export default Tracks;
