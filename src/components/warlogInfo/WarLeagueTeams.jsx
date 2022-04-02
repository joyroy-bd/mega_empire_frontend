import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

function ClanRow({ clan, index }) {
  const [up] = useState(true);
  return (
    <>
      <div
        className={
          clan.tag === "#RRVJCJVY"
            ? "warleague--teams_team ourclan"
            : "warleague--teams_team"
        }
      >
        <div className="team-position">
          <span className="team-position-indicator">
            <FontAwesomeIcon
              style={!up && { color: "red" }}
              icon={up ? faCaretUp : faCaretDown}
            />
          </span>
          <span className="team-position-index down">{index + 1}.</span>
        </div>
        <div className="team-badge">
          <img src={clan.badgeUrls.medium} alt="badge" />
        </div>
        <div className="team-name">
          <b>{clan.name}</b>
          <small>{clan.tag}</small>
        </div>
        <div className="team-stars">
          <FontAwesomeIcon icon={faStar} />
          <span>0</span>
        </div>
        <div className="team-distroy">0%</div>
        <div className="team-morebtn">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
    </>
  );
}

export default function WarLeagueTeams({ leagueInfo }) {
  return (
    <section className="warleague">
      <div className="container">
        <h2 className="league-title">
          {new Date(leagueInfo.season).toLocaleString("default", {
            month: "long",
          })}{" "}
          - {new Date(leagueInfo.season).getFullYear()}
        </h2>
        <div className="warleague--teams">
          {leagueInfo.clans.map((clan, index) => (
            <ClanRow key={index} clan={clan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
