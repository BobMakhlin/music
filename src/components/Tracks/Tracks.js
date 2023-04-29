import { useState } from "react";
import useMusicTracks from "../../hooks/use-music-tracks";
import { useCallback } from "react";
import { Box, LinearProgress, List } from "@mui/material";
import Track from "./Track";
import { useRef } from "react";
import ErrorAlert from "../../UI/ErrorAlert";
import SearchInput from "./SearchInput";

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
      <List>
        {tracks?.map((track) => (
          <Track
            key={track.id}
            name={track.name}
            albumImage={track.albumImage}
            duration={track.duration}
          ></Track>
        ))}
      </List>
    );
  }

  return (
    <Box flex={4}>
      <SearchInput
        value={trackName}
        onChange={changeHandler}
        inputRef={inputRef}
      />
      {content}
    </Box>
  );
};

export default Tracks;
