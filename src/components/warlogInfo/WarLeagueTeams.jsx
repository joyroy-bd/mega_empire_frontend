import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ClanRow({ clan, index, details, setPointClanTag }) {
  const [options, setOptions] = useState(false);

  function gotoClan(tag) {
    let query = new URLSearchParams();
    query.append("tag", tag);
    let a = document.createElement("a");
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
    a.setAttribute("href", `/clan?${query.toString()}`);
    a.click();
  }

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
        <div onClick={() => setOptions((pre) => !pre)} className="team-morebtn">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
        {options && (
          <>
            <div className="team-details">
              <button onClick={() => gotoClan(clan.tag)}>Visit Clan</button>
              <button
                onClick={() => {
                  setPointClanTag(clan.tag);
                }}
              >
                Points
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default function WarLeagueTeams({ leagueInfo, wars }) {
  const [first, setfirst] = useState(true);
  const [showGroup, setshowGroup] = useState(false);
  const [pointClan, setPointClanTag] = useState("");
  // console.log(pointClanTag)
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

        <div className="warleague--nav">
          <ul>
            <li
              id={pointClan}
              className={showGroup ? "active" : ""}
              onClick={() => {
                setshowGroup((pre) => !pre);
              }}
            >
              {showGroup ? "Hide" : "Show"} Group
            </li>
            {/* <li>Rounds</li>
            <li>Points</li> */}
          </ul>
        </div>

        <div className="warleague--tab">
          <div
            id="groupTeams"
            className={
              showGroup ? "warleague--teams active" : "warleague--teams hide"
            }
          >
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
                    setPointClanTag={setPointClanTag}
                  />
                );
              })}
          </div>

          <div className="warleague--point hide" id="teamPoint">
            <div className="warleague--rounds_round-teams">
              <div className="team1 loss">
                <div className="team-badge">
                  <img
                    src="https://api-assets.clashofclans.com/badges/200/DzRQyaWSuB77K-IHSSw8z9AUainmedOWKCUYXaW7_m4.png"
                    alt=""
                  />
                </div>
                <div className="team-name">MEGA EMPIRE</div>
                <div className="team-score">
                  <span>0</span>
                  {/* <svg
                    style="max-width: 1rem;"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
                    ></path>
                  </svg> */}
                </div>
              </div>
              <div className="team2 win">
                <div className="team-badge">
                  <img
                    src="https://api-assets.clashofclans.com/badges/200/JdsQ1Q2whmJR_gAeSrDZrxmlC6XGi7yZ5OFT3L4EkkQ.png"
                    alt=""
                  />
                </div>
                <div className="team-name">الشباب الطيبين</div>
                <div className="team-score">
                  <span>0</span>
                  {/* <svg
                    style="max-width: 1rem;"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
                    ></path>
                  </svg> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
