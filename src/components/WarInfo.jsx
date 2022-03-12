import React, { useState, useEffect } from "react";
import star from "../img/star.png";

export default function WarInfo({ tag }) {
  const [data, setData] = useState(null);

  console.log(tag.replace("#", ""));
  useEffect(() => {
    fetch(
      `http://localhost:8080/clan/clanwarleague/war/${tag.replace("#", "")}`
    )
      .then((res) => res.json())
      .then((dat) => {
        setData(dat);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [tag]);

  function isTeam1Win(data) {
    if (data.state === "warEnded") {
      if (data.clan.stars > data.opponent.stars) {
        return "win";
      } else if (
        data.clan.destructionPercentage > data.opponent.destructionPercentage
      ) {
        return "win";
      } else {
        return "loss";
      }
    } else {
      return "inWar";
    }
  }
  function isTeam2Win(data) {
    if (data.state === "warEnded") {
      if (data.clan.stars < data.opponent.stars) {
        return "win";
      } else if (
        data.clan.destructionPercentage < data.opponent.destructionPercentage
      ) {
        return "win";
      } else {
        return "loss";
      }
    } else {
      return "inWar";
    }
  }

  console.log(data);

  return (
    <>
      {data && <>
        <div className="warleague--rounds_round-teams">
        <div className={"team1 " + isTeam1Win(data)}>
          <div className="team-badge">
            <img src={data.clan.badgeUrls.small} alt="" />
          </div>
          <div className="team-name">{data.clan.name}</div>
          <div className="team-score">
            <span>{data.clan.stars}</span>
            <img className="img" src={star} alt="" />
          </div>
        </div>
        <div className={"team2 " + isTeam2Win(data)}>
          <div className="team-badge">
            <img src={data.opponent.badgeUrls.small} alt="" />
          </div>
          <div className="team-name">{data.opponent.name}</div>
          <div className="team-score">
            <span>{data.opponent.stars}</span>
            <img className="img" src={star} alt="" />
          </div>
        </div>
      </div>
      </>}
    </>
  );
}
