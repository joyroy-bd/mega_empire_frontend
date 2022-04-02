import React from "react";
import useWarDetails from "../../hooks/useWarDetails";
import Loading from "../Loading";

export default function WarDetails({ opponentTag }) {
  console.log(opponentTag);
  let { loading, error, data } = useWarDetails(opponentTag);
  // /:tag/wardetails/:endtime

  return (
    <>
      {(loading || error) && (
        <Loading container={false} loading={loading} error={error} />
      )}
      {<p className="container">{opponentTag} - Found!</p>}
    </>
  );
}
