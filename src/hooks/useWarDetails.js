import { useEffect, useState } from 'react'

function useWarDetails(tag) {
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
            }/api/clan/wardetail`
          );
  
          if (tag) {
            url.searchParams.append("tag", tag);
          }
  
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
    }, [tag]);
  
    return {
      loading,
      error,
      data,
    };
}
export default useWarDetails