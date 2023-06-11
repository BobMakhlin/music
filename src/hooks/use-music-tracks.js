import { useEffect } from "react";
import useGetRequest from "./use-get-request";
import useEnv from "./use-env";
import { debounce } from "lodash";
import urlcat from "urlcat";

const useMusicTracks = ({ name, artist, genre, album }) => {
  const { musicApi } = useEnv();
  const {
    data: tracks,
    isLoading,
    error,
    sendRequest,
  } = useGetRequest(musicApi);

  useEffect(() => {
    if (!name && !artist && !genre && !album) {
      return;
    }

    const getTracks = async () => {
      const url = urlcat("", "/Tracks", {
        name,
        artist,
        genre,
        album,
      });
      await sendRequest(url);
    };
    
    const debouncedFn = debounce(getTracks, 1000);
    debouncedFn();

    return () => {
      debouncedFn.cancel();
    };
  }, [sendRequest, name, artist, genre, album]);

  return { tracks, isLoading, error };
};

export default useMusicTracks;
