import React, { useEffect, useState } from "react";
import "../styles/warLeagues.css";
import star from "../img/star.png";
import Round from "./Round";

export default function Main() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/clan/clanwarleague/group/RRVJCJVY`)
      .then((res) => res.json())
      .then((dat) => {
        setData(dat);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className="warleague">
        {data && (
          <>
            <div className="container">
              <h2 className="league-title">
                {new Date(data.season).toLocaleString("en")}
              </h2>
              <div className="warleague--teams">
                {data.clans.map((clan, position) => (
                  <>
                    <div className="warleague--teams_team">
                      <div className="team-position">
                        <span className="team-position-indicator ">
                          <i className="fa-solid fa-caret-up"></i>
                        </span>
                        <span className="team-position-index ">
                          {position + 1}.
                        </span>
                      </div>
                      <div className="team-badge">
                        <img src={clan.badgeUrls.small} alt="badge" />
                      </div>
                      <div className="team-name">
                        <b>{clan.name}</b>
                        <small>{clan.tag}</small>
                      </div>
                      <div className="team-stars">
                        <img src={star} alt="" />
                        <span>45</span>
                      </div>
                      <div className="team-distroy">5000%</div>
                      <div className="team-morebtn">
                        <i className="fa-solid fa-ellipsis"></i>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </>
        )}
      </section>

      <section class="warleague">
        {data && (
          <>
            <div class="container">
              <div class="warleague--rounds">
                {data.rounds.map((round, ind) => (
                  <>
                    <Round round={round} roundIndex={ind} />
                  </>
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
