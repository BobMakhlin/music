import { useEffect } from "react";
import useMusicApi from "../hooks/use-music-api";

const Tracks = () => {
  const {tracks, isLoading, error, getTracks} = useMusicApi();

  useEffect(() => {
    getTracks().then();
  }, [getTracks]);

  if (error) {
    return <p>Error</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const cards = tracks?.map((x) => <div key={x.id}>{x.name}</div>);
  return <div>{cards}</div>;
};

export default Tracks;
