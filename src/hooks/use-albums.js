import { debounce } from "lodash";
import { useEffect } from "react";
import useEnv from "./use-env";
import useGetRequest from "./use-get-request";

const useAlbums = ({ name }) => {
  const { musicApi } = useEnv();
  const {
    data: albums,
    isLoading,
    error,
    sendRequest,
  } = useGetRequest(musicApi);

  useEffect(() => {
    if (!name || name.trim() === "") {
      return;
    }

    const getAlbums = async () => {
      await sendRequest(`/Albums?name=${name}`);
    };

    const debouncedFn = debounce(getAlbums, 1000);
    debouncedFn();

    return () => {
      debouncedFn.cancel();
    };
  }, [sendRequest, name]);

  return { albums, isLoading, error };
};

export default useAlbums;
