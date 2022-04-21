import { useState, useEffect } from "react";

function useClanLeagueWar(tag) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function requestFetch() {
      try {
        setLoading(true);
        setError(false);

        let url = new URL(
          `${
            process.env.NODE_ENV === "development"
              ? process.env.REACT_APP_DEV_SERVER
              : process.env.REACT_APP_SERVER
          }/api/clan/warleaguewar`
        );

        if (tag) {
          url.searchParams.append("tag", tag);
        }

        const res = await fetch(url);

        const data = await res.json();
        if (res.status>400) {
          throw Error(data.message);
        }
        setLoading(false);
        setData(data);
      } catch (err) {
        setLoading(false);
        setError(true);
        console.log(err);
      }
    }
    requestFetch();
  }, [tag]);

  return {
    loading,
    error,
    data,
  };
}

export default useClanLeagueWar;
