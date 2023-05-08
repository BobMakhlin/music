import { useState } from "react";
import useMusicTracks from "../../hooks/use-music-tracks";
import { useCallback } from "react";
import { Box, LinearProgress, List } from "@mui/material";
import Track from "./Track";
import { useRef } from "react";
import ErrorAlert from "../../UI/ErrorAlert";
import SearchInput from "./SearchInput";
import { useCurrentTrack } from "../../store/track-context";

const Tracks = () => {
  const [trackName, setTrackName] = useState("Bones");
  const { tracks, isLoading, error } = useMusicTracks({ name: trackName });
  const inputRef = useRef(null);
  const { currentTrack, setCurrentTrack } = useCurrentTrack();

  const changeHandler = useCallback((event) => {
    setTrackName(event.target.value);
  }, []);
  const handleRetry = useCallback(() => {
    inputRef.current.focus();
  }, []);
  const handleTrackClick = useCallback(
    (track) => {
      setCurrentTrack(track);
    },
    [setCurrentTrack]
  );

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
            selected={currentTrack?.id === track.id ?? false}
            track={track}
            onClick={handleTrackClick}
          />
        ))}
      </List>
    );
  }

  return (
    <Box sx={{ gridArea: "tracks", overflowY: "scroll" }}>
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
