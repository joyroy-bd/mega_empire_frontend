import React from "react";
import "../styles/labels.style.css";

export default function Labels({ clanInfo }) {
  return (
    <section className="lable-section">
      <div className="container">
        <div className="label--cards">
          {clanInfo &&
            clanInfo.labels.map((label, key) => (
              <div key={key} className="label--cards_card">
                <div className="label--cards_card-img">
                  <img src={label.iconUrls.medium} alt="" />
                </div>
                <div className="label--cards_card-body">
                  <p>{label.name}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
