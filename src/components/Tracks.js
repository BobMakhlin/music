import useMusicTracks from "../hooks/use-music-tracks";

const Tracks = () => {
  const { tracks, isLoading, error } = useMusicTracks({ name: "Bones" });

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
