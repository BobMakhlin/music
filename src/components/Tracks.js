import { useState } from "react";
import useMusicTracks from "../hooks/use-music-tracks";
import { useCallback } from "react";
import { Box, LinearProgress, Stack, TextField } from "@mui/material";
import Track from "./Track";
import { useRef } from "react";
import ErrorAlert from "../UI/ErrorAlert";

const Tracks = () => {
  const [trackName, setTrackName] = useState("Bones");
  const { tracks, isLoading, error } = useMusicTracks({ name: trackName });
  const inputRef = useRef(null);

  const changeHandler = useCallback((event) => {
    setTrackName(event.target.value);
  }, []);
  const handleRetry = useCallback(() => {
    inputRef.current.focus();
  }, []);

  let content;

  if (error) {
    content = <ErrorAlert onRetry={handleRetry} content="An error occurred" />;
  } else if (isLoading) {
    content = <LinearProgress />;
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
        inputRef={inputRef}
      />
      {content}
    </Box>
  );
};

export default Tracks;
