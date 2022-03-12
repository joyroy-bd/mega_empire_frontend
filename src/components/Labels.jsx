import React from "react";
import "../styles/labels.style.css";

export default function Labels({ clanInfo }) {
  console.log(clanInfo);
  return (
    <section className="lable-section">
      <div className="container">
        <div className="label--cards">
          {clanInfo &&
            clanInfo.labels.map((label,key) => (
              <>
                <div key={key} className="label--cards_card">
                  <img
                    className="label--cards_card-img"
                    src={label.iconUrls.medium}
                    alt=""
                  />
                  <div className="label--cards_card-body">
                    <h3>{label.name}</h3>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </section>
  );
}
