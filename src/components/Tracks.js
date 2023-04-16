import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Tracks = () => {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("https://localhost:7223/api/Tracks?name=Believer");
        setTracks(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTracks();
  }, []);

  if (error) {
    return <p>Error</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const cards = tracks.map((x) => <div key={x.id}>{x.name}</div>);
  return <div>{cards}</div>;
};

export default Tracks;
