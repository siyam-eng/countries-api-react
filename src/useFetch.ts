import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // load data from the API
  useEffect(() => {
    const abortController = new AbortController();
    fetch(url, { signal: abortController.signal })
      .then((e) => {
        if (!e.ok) {
          throw Error(
            "Some error ocurred: could not fetch data from the server"
          );
        }
        console.log("Fetching data"); // Log to indicate the fetch started.
        return e.json();
      })

      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
          return;
        }
        setError(err.message);
        setIsLoading(false);
      });
    return () => abortController.abort();
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
