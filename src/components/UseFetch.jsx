import { useState, useEffect } from "react";

function UseFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const FetchData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setIsPending(false);
        setError(null);
      } catch (err) {
        setData(null);
        setError(err.message);
        setIsPending(false);
      }
    };
    FetchData();
  }, [url]);
  return { data, error, isPending };
}

export { UseFetch };
