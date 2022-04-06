import React, { useState } from "react";
import AddStars from "../components/test/AddStars";
import StarContex from "../components/test/starContext";
import Stars from "../components/test/Stars";

export default function Test() {
  const [stars, setStars] = useState([{ "#1": 3 }]);
  return (
    <>
      <StarContex.Provider value={{ stars: stars, setStars: setStars }}>
        <Stars />
        <AddStars setStars={setStars} />
      </StarContex.Provider>
    </>
  );
}
