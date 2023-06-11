import { useEffect } from "react";
import useEnv from "./use-env";
import useGetRequest from "./use-get-request";

const useGenres = () => {
  const { musicApi } = useEnv();
  const {
    data: genres,
    isLoading,
    error,
    sendRequest,
  } = useGetRequest(musicApi);

  useEffect(() => {
    const getGenres = async () => {
      await sendRequest("/Genres");
    };
    getGenres();
  }, [sendRequest]);

  return { genres, isLoading, error };
};

export default useGenres;
