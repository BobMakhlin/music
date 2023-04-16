import { useCallback } from "react";
import { useEnv } from "../store/env-context";
import useGetRequest from "./use-get-request";

const useMusicApi = () => {
  const { musicApi } = useEnv();
  const {
    data: tracks,
    isLoading,
    error,
    sendRequest,
  } = useGetRequest(musicApi);

  const getTracks = useCallback(async (name) => {
    await sendRequest(`/Tracks?name=${name}`);
  }, [sendRequest]);

  return { tracks, isLoading, error, getTracks };
};

export default useMusicApi;
