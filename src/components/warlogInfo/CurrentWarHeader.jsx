import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Moment from "react-moment";
import useDate from "../../hooks/useDate";
import sword from "../../img/sword (1).png";

export default function CurrentWarHeader({ data }) {
  let etime = useDate(
    data ? (data.state === "preparation" ? data.startTime : data.endTime) : ""
  );
  return (
    <>
      <div className="currentwar--header">
        <div className="currentwar--header_teams">
          <div className="currentwar--header_teams-team">
            <h4 className="teams-team_name">{data.clan.name}</h4>
            <img
              src={data.clan.badgeUrls.small}
              alt=""
              className="teams-team_logo"
            />
          </div>
          <p>VS</p>
          <div className="currentwar--header_teams-team">
            <img
              src={data.opponent.badgeUrls.small}
              alt=""
              className="teams-team_logo"
            />
            <h4 className="teams-team_name">{data.opponent.name}</h4>
          </div>
        </div>
        <div className="currentwar--header_time">
          {data.state === "inWar" && (
            <div className="currentwar--header_score">
              <div className="progressbar">
                <div className="star">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div
                  className="progressbar-fill"
                  style={{
                    width: `calc(${
                      (data.clan.stars / (data.teamSize * 3)) * 100
                    }% - 20px)`,
                  }}
                ></div>
                <div className="score">{data.clan.stars}</div>
              </div>
            </div>
          )}

          {data.state !== "notInWar" && (
            <span className="time">
              <Moment fromNow date={etime} />
            </span>
          )}

          {data.state === "inWar" && (
            <div className="currentwar--header_score flex-rev">
              <div className="progressbar rev">
                <div className="star">
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                </div>
                <div
                  className="progressbar-fill"
                  style={{
                    width: `calc(${
                      (data.opponent.stars / (data.teamSize * 3)) * 100
                    }% - 20px)`,
                  }}
                ></div>
                <div className="score">{data.opponent.stars}</div>
              </div>
            </div>
          )}
        </div>
        <div className="currentwar--header_status">
          <span>
            {data.state === "inWar" ? "Battal" : data.state.toUpperCase()}
          </span>
        </div>
        {data.state === "inWar" && (
          <>
            <div className="currentwar--header_attacks">
              <div className="currentwar--header_atatcks-attack left">
                <img src={sword} alt="" />
                <span>
                  {data.clan.attacks} / {data.teamSize * data.attacksPerMember}
                </span>
              </div>
              <div className="currentwar--header_atatcks-attack right">
                <span>
                  {data.opponent.attacks} /{" "}
                  {data.teamSize * data.attacksPerMember}
                </span>
                <img src={sword} alt="" />
              </div>
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
            <div className="currentwar--header_clans">
              <a
                target="_blank"
                rel="noreferrer"
                href={`/clan?${new URLSearchParams({
                  tag: data.clan.tag,
                }).toString()}`}
              >
                View Clan
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={`/clan?${new URLSearchParams({
                  tag: data.opponent.tag,
                }).toString()}`}
              >
                View Clan
              </a>
            </div>
          </>
        )}
        {/* <div className="currentwar--header_clans">
          <a
            target="_blank"
            rel="noreferrer"
            // href={`/clan?${new URLSearchParams({
              tag: data.clan.tag,
            }).toString()}`}
          >
            View Clan
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={`/clan?${new URLSearchParams({
              tag: data.opponent.tag,
            }).toString()}`}
          >
            View Clan
          </a>
        </div> */}
      </div>
    </>
  );
}
