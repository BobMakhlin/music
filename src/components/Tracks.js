import { useState } from "react";
import useMusicTracks from "../hooks/use-music-tracks";
import { useCallback } from "react";

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
    content = tracks?.map((x) => <div key={x.id}>{x.name}</div>);
  }

  return (
    <div>
      <input value={trackName} type="text" onChange={changeHandler} />
      {content}
    </div>
  );
};

export default Tracks;
