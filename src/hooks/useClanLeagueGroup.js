import { useState, useEffect } from "react";

function useClanLeagueGroup(tag) {
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
          }/api/clan/currentwarleague`
        );

        if (tag) {
          url.searchParams.append("tag", tag);
        }

        const res = await fetch(url);
        const data = await res.json();

        if (res.status > 400) {
          //throw Error(data.message);
          throw new Error(JSON.stringify(data));
        }
        setLoading(false);
        setData(data);
      } catch (err) {
        setLoading(false);
        setError(JSON.parse(err.message));
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

export default useClanLeagueGroup;
