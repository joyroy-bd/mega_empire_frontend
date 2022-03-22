import React from "react";
import "../styles/warLeagueSection.css";

export default function WarLeagueSection({ clanInfo }) {
  return (
    <section className="warleague-section">
      <div className="container">
        <div className="warleague--card">
          <div className="warleague--card_body">
            <ul>
              <li>
                {new Date().toLocaleString("en-US", { month: "long" })} Season
              </li>
              <li>{clanInfo.warLeague.name}</li>
              <li>
                1st Place <span className="uparrow"></span>
              </li>
              <li>Stars : 206</li>
              <li>Destruction : 5880</li>
              <li>
                <button id="joinus" className="coc-btn">
                  Play Next League.
                </button>
              </li>
            </ul>
          </div>
          <div className="warleague--card_image">
            <img
              src={`/${clanInfo.warLeague.name
                .replace(" ", "")
                .replace(" ", "")}.png`}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
