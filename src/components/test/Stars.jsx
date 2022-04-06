import React, { useContext } from "react";
import starContext from "./starContext";

export default function Stars() {
  let { stars } = useContext(starContext);
  console.log(stars)
  return stars.map((star,i) => (
    <div key={i}>
      {Object.keys(star)} = {Object.values(star)}
    </div>
  ));
}
