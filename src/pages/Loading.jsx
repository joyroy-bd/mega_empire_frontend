import React, { useEffect, useState } from "react";

export default function Loading() {
  const [text, setText] = useState(".");

  useEffect(() => {
    let enter = setInterval(() => {
      setText((pre) => {
        if (pre.length === 3) {
          return ".";
        } else {
          return pre + ".";
        }
      });
    }, 500);
    return () => {
      clearInterval(enter);
    };
  }, []);

  let style = {
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
  };

  return (
    <div style={style}>
      <p>Loading{text}</p>
    </div>
  );
}
