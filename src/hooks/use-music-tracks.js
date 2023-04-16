import { useEffect } from "react";
import useGetRequest from "./use-get-request";
import useEnv from "./use-env";

const useMusicTracks = ({name}) => {
  const { musicApi } = useEnv();
  const {
    data: tracks,
    isLoading,
    error,
    sendRequest,
  } = useGetRequest(musicApi);

  useEffect(() => {
    const getTracks = async () => {
      await sendRequest(`/Tracks?name=${name}`);
    }
    getTracks();

    // TODO: what if the component is unmounted?
    // TODO: why we send the request right away? let's send it 2secs later.
  }, [sendRequest, name]);

  return { tracks, isLoading, error };
};

export default useMusicTracks;
