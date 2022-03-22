import React from "react";
import "../styles/greating.style.css";

export default function Greating({ clanInfo }) {
  function copy() {
    navigator.clipboard.writeText(clanInfo.tag).then((res) => {
      alert("Clan Tag Copied!");
    });
  }

  return (
    <section className="greating-section">
      <div className="container">
        <div className="greating--card">
          <div className="greating--card_greating">
            <h1>Wellcome.</h1>
            <p>{clanInfo.description}</p>
            <ul
              style={{
                listStyleType: "initial",
                marginTop: "10px",
                color: "#fff",
              }}
            >
              <li>Play war sincerely.</li>
              <li>Keep active regularly.</li>
              <li>Play Clan Games and earn higest score.</li>
              <li>Donate Troops.</li>
            </ul>
            <button onClick={copy}>Join us</button>
          </div>
          <div className="greating--card_image">
            <img
              src="https://api-assets.clashofclans.com/badges/512/jqabKPbWd6n4m2YWixgbHtNXRiwK3CrIagCzloAo_Z4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
