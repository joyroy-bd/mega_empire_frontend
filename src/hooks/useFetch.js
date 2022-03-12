import { useState } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [data, setData] = useState(null);

  fetch(url)
    .then((res) => res.json())
    .then((dat) => {
      setData(dat);
      setLoading(false);
    })
    .catch((err) => {
      setData(null);
      setLoading(false);
      setErr(true);
      console.log(err);
    });

  return { loading, data, err };
}
