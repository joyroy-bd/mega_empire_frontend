import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

function ClanRow({ clan, index, details }) {
  const [up] = useState(true);
  let { stars, destructionPercentage } = details[clan.tag]
    ? details[clan.tag]
    : { stars: 0, destructionPercentage: 0 };
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
          <span className="team-position-index up">{index + 1}.</span>
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
          <span>{stars}</span>
        </div>
        <div className="team-distroy">{parseInt(destructionPercentage)}%</div>
        <div className="team-morebtn">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
    </>
  );
}

export default function WarLeagueTeams({ leagueInfo, wars }) {
  const [first, setfirst] = useState(true);

  const [details, setDetails] = useState({});
  useEffect(() => {
    setDetails(() => {
      let details = {};
      wars.forEach((war) => {
        if (details[war.clan.tag]) {
          let preData = details[war.clan.tag];
          details[war.clan.tag] = {
            stars: preData.stars + war.clan.stars,
            destructionPercentage:
              preData.destructionPercentage + war.clan.destructionPercentage,
          };
        } else {
          details[war.clan.tag] = {
            stars: war.clan.stars,
            destructionPercentage: war.clan.destructionPercentage,
          };
        }

        if (details[war.opponent.tag]) {
          let preData = details[war.opponent.tag];
          details[war.opponent.tag] = {
            stars: preData.stars + war.opponent.stars,
            destructionPercentage:
              preData.destructionPercentage +
              war.opponent.destructionPercentage,
          };
        } else {
          details[war.opponent.tag] = {
            stars: war.opponent.stars,
            destructionPercentage: war.opponent.destructionPercentage,
          };
        }
      });
      return details;
    });
    if (first) {
      setTimeout(() => {
        setfirst((pre) => !pre);
      }, 10000);
    }
  }, [first, wars]);

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
          {/* {leagueInfo.clans.map((clan, index) => (
            <ClanRow
              details={details}
              key={index}
              clan={clan}
              star={false}
              index={index}
            />
          ))} */}
          {Object.keys(details)
            .sort((next, curr) => {
              if (details[curr].stars < details[next].stars) {
                return -1;
              } else {
                return +1;
              }
            })
            .map((clan, index) => {
              let newLeagueInfo = leagueInfo.clans.filter((val, ind) => {
                if (val.tag === clan) {
                  return true;
                } else {
                  return false;
                }
              });
              return (
                <ClanRow
                  details={details}
                  key={index}
                  clan={newLeagueInfo[0]}
                  star={false}
                  index={index}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
