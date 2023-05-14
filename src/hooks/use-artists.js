import { debounce } from "lodash";
import { useEffect } from "react";
import useEnv from "./use-env";
import useGetRequest from "./use-get-request";

const useArtists = ({ name }) => {
  const { musicApi } = useEnv();
  const {
    data: artists,
    isLoading,
    error,
    sendRequest,
  } = useGetRequest(musicApi);

  useEffect(() => {
    if (!name || name.trim() === "") {
      return;
    }

    const getArtists = async () => {
      await sendRequest(`/Artists?name=${name}`);
    };

    const debouncedFn = debounce(getArtists, 1000);
    debouncedFn();

    return () => {
      debouncedFn.cancel();
    };
  }, [sendRequest, name]);


  return { artists, isLoading, error };
};

export default useArtists;
