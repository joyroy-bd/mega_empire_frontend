import React from "react";
import { useEffect, useState } from "react";
import starIcon from "../img/star.png";
import swords from "../img/swords.png";
import sword from "../img/sword.png";
export default function LeagueInfos({ tag }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (tag !== "0") {
      fetch(`http://localhost:8080/clan/clanwarleague/war/${tag}`)
        .then((res) => res.json())
        .then((dat) => {
          setData(dat);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [tag]);
  console.log("Round Render");
  console.log(data);

  return (
    <div className="leagueround">
      <div className="leagueround-teams">
        <div className="team win">
          <h2 className="team-name">{data && data.clan.name}</h2>
          <div className="team-status">
            <div className="team-status-box">
              <img src={sword} alt="atatc" />
              <span>{data && data.clan.attacks}</span>
            </div>
            <div className="team-status-box">
              <img src={starIcon} alt="stars" />
              <span>{data && data.clan.stars}</span>
            </div>
            <div className="team-status-box">
              <img src={swords} alt="dwstroy" />
              <span>{data && data.clan.destructionPercentage.toFixed(1)}%</span>
            </div>
          </div>
        </div>
        <div className="team win">
          <h2 className="team-name">{data && data.opponent.name}</h2>
          <div className="team-status">
            <div className="team-status-box">
              <img src={sword} alt="atatc" />
              <span>{data && data.opponent.attacks}</span>
            </div>
            <div className="team-status-box">
              <img src={starIcon} alt="stars" />
              <span>{data && data.opponent.stars}</span>
            </div>
            <div className="team-status-box">
              <img src={swords} alt="dwstroy" />
              <span>{data && data.opponent.destructionPercentage.toFixed(1)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
