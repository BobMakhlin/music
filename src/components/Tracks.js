import { useEffect } from "react";
import useGetRequest from "../hooks/use-get-request";

const Tracks = () => {
  const {
    data: tracks,
    isLoading,
    error,
    sendRequest,
  } = useGetRequest("https://localhost:7223/api");

  useEffect(() => {
    sendRequest("/Tracks?name=Believer").then();
  }, [sendRequest]);

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
