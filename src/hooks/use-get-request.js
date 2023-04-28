import axios from "axios";
import { useCallback, useState } from "react";

const useGetRequest = (baseUrl = null) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (url) => {
    try {
      setError(null);
      setIsLoading(true);
      const targetUrl = baseUrl ? baseUrl.concat(url) : url;
      const response = await axios.get(targetUrl);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [baseUrl]);

  return { data, isLoading, error, sendRequest };
};

export default useGetRequest;
