import { useEffect } from "react";
import useGetRequest from "./use-get-request";
import useEnv from "./use-env";
import { debounce } from "lodash";

const useMusicTracks = ({ name }) => {
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
    };
    
    const debouncedFn = debounce(getTracks, 1000);
    debouncedFn();

    return () => {
      debouncedFn.cancel();
    };
  }, [sendRequest, name]);

  return { tracks, isLoading, error };
};

export default useMusicTracks;
