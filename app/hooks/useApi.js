import { useState } from "react";

function useApi(apiFun) {
  const [data, setdata] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFun(...args);
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setdata(response.data);
  };
  return { data, error, loading, request };
}

export default useApi;
