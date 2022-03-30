import React, { useState } from "react";
import useDate from "../../hooks/useDate";
import Moment from "react-moment";
import WarDetails from "./WarDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShield } from "@fortawesome/free-solid-svg-icons";

export default function WarLogRow({ war }) {
  const [details, setdetails] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setdetails((pre) => !pre);
        }}
        className={`clanwarlog--row ${war.result}`}
      >
        <div className="clanwarlog--row_time">
          <small style={{ fontSize: "0.45rem" }}>
            <Moment fromNow date={useDate(war.endTime)} />
          </small>
        </div>
        <div className="clanwarlog--row_teamsinfo">
          <div className="teamsinfo-details">
            <div className="team1-details">
              <p>{war.clan.name}</p>
              <img src={war.clan.badgeUrls.small} alt="" />
            </div>
            <div className="team2-details">
              <img src={war.opponent.badgeUrls.small} alt="" />
              <p>{war.opponent.name || "***"}</p>
            </div>
          </div>
          <div className="teaminfo-scores">
            <div className="team1-score">
              <div className="xp">
                <FontAwesomeIcon icon={faShield} />+{war.clan.expEarned}
              </div>
              <div className="destroy">
                {parseInt(war.clan.destructionPercentage)}%
              </div>
              <div className="stars">
                {" "}
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>{" "}
                {war.clan.stars}
              </div>
            </div>
            <div className="vs">
              {war.teamSize} VS {war.teamSize}
            </div>
            <div className="team2-score">
              <div className="stars">
                {" "}
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>{" "}
                {war.opponent.stars}
              </div>
              <div className="destroy">
                {parseInt(war.opponent.destructionPercentage)}%
              </div>
            </div>
          </div>
        </div>
      </div>
      {details && <WarDetails opponentTag={war.opponent.tag} />}
    </>
  );
}
