import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useClanLeagueWar from "../../hooks/useClanLeagueWar";

export default function WarLeagueRoundTeams({ warTag }) {
  // console.log("WarLeagueRoundTeams");
  let { data } = useClanLeagueWar(warTag);
  // console.log(data);
  return (
    <>
      {data && (
        <>
          {warTag !== "#0" && (
            <>
              <div className="warleague--rounds_round-teams">
                <div className="team1 loss">
                  <div className="team-badge">
                    <img
                      src={data.clan.badgeUrls.medium}
                      alt=""
                    />
                  </div>
                  <div className="team-name">{data.clan.name}</div>
                  <div className="team-score">
                    <span>{data.clan.stars}</span>
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
                <div className="team2 win">
                  <div className="team-badge">
                    <img
                      src={data.opponent.badgeUrls.medium}
                      alt=""
                    />
                  </div>
                  <div className="team-name">{data.opponent.name}</div>
                  <div className="team-score">
                    <span>{data.opponent.stars}</span>
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
