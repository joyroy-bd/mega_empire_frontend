import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useEffect, useState } from "react";
import useClanLeagueWar from "../../hooks/useClanLeagueWar";
import CurrentWarFooter from "./CurrentWarFooter";
import CurrentWarHeader from "./CurrentWarHeader";
import CurrentWarMain from "./CurrentWarMain";

export default function WarLeagueRoundTeams({ warTag, setWars }) {
  const [toggel, setToggel] = useState(!true);
  const [showdetails, setShowdetails] = useState({ show: false, data: null });
  let { data } = useClanLeagueWar(warTag);

  useEffect(() => {
    if (data) {
      setWars((pre) => {
        pre.push(data);
        return pre;
      });
    }
  }, [data, setWars]);

  function viewDetails() {
    setToggel((pre) => !pre);
  }

  function teamClass(teamFor) {
    let className = data.state;
    if (data.state === "warEnded") {
      if (teamFor === "team1") {
        className =
          data.clan.destructionPercentage > data.opponent.destructionPercentage
            ? "win"
            : "loss";
      } else {
        className =
          data.clan.destructionPercentage < data.opponent.destructionPercentage
            ? "win"
            : "loss";
      }
    }
    return className;
  }

  if (data) {
    data.clan.members.sort((next, curr) => {
      if (curr.townhallLevel > next.townhallLevel) {
        return +1;
      } else {
        return -1;
      }
    });
    data.opponent.members.sort((next, curr) => {
      if (curr.townhallLevel > next.townhallLevel) {
        return +1;
      } else {
        return -1;
      }
    });
  }

  return (
    <>
      {data && (
        <>
          {warTag !== "#0" && (
            <>
              <div
                onClick={viewDetails}
                className="warleague--rounds_round-teams"
              >
                <div className={`team1 ${teamClass("team1")}`}>
                  <div className="team-badge">
                    <img src={data.clan.badgeUrls.medium} alt="" />
                  </div>
                  <div className="team-name">{data.clan.name}</div>
                  <div className="team-score">
                    <span>{data.clan.stars}</span>
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
                <div className={`team2 ${teamClass("team2")}`}>
                  <div className="team-badge">
                    <img src={data.opponent.badgeUrls.medium} alt="" />
                  </div>
                  <div className="team-name">{data.opponent.name}</div>
                  <div className="team-score">
                    <span>{data.opponent.stars}</span>
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
              </div>
              {(data.state === "inWar" ? !toggel : toggel) && (
                <>
                  <div
                    style={{ background: "#fff" }}
                    className={`currentwar ${data.state}`}
                  >
                    <CurrentWarHeader data={data} />

                    {data.state !== "notInWar" && (
                      <>
                        <CurrentWarMain
                          setShowdetails={setShowdetails}
                          data={data}
                        >
                          <CurrentWarFooter
                            showdetails={showdetails}
                            setShowdetails={setShowdetails}
                            data={data}
                          />
                        </CurrentWarMain>
                      </>
                      // <>
                      //   <CurrentWarMain setShowdetails={setShowdetails} data={data}>
                      //     <CurrentWarFooter
                      //       showdetails={showdetails}
                      //       setShowdetails={setShowdetails}
                      //       data={data}
                      //     />
                      //   </CurrentWarMain>
                      // </>
                    )}
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
