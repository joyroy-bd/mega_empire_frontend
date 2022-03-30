import React from "react";
import useWarDetails from "../../hooks/useWarDetails";

export default function WarDetails({ opponentTag }) {
  console.log(opponentTag)
  let res = useWarDetails(opponentTag);
  // /:tag/wardetails/:endtime
  console.log(res);
  return <>{ <p className="container">{opponentTag} - Found!</p>}</>;
}
