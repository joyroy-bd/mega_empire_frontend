import { useState, useEffect } from "react";

function useClanInfo(tagName = "RRVJCJVY") {
  tagName = tagName.replace('#','')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function requestFetch() {
      try {
        setLoading(true);
        setError(false);

        let url = `${process.env.REACT_APP_SERVER}/clan/${tagName}`;

        const res = await fetch(url);
        const data = await res.json();
        setLoading(false);
        setData(data);
      } catch (err) {
        setLoading(false);
        setError(true);
        console.log(err);
      }
    }
    requestFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    error,
    data,
  };
}

export default useClanInfo;
