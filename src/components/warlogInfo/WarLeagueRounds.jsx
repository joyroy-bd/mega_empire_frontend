import React, { Fragment } from "react";
import WarLeagueRoundTeams from "./WarLeagueRoundTeams";

export default function WarLeagueRounds({ leagueRounds, setWars }) {
  // console.log("WarLeagueRounds")
  // console.log(leagueRounds)
  return (
    <>
      {leagueRounds.map((round, index) => (
        <Fragment key={index}>
          <section className="warleague">
            <div className="container">
              <div className="warleague--rounds">
                <div className="warleague--rounds_round">
                  <h2 className="league-title">Round {index + 1}</h2>
                  {round.warTags.map(
                    (warTag, warIndex) =>
                      warTag !== "#0" && (
                        <WarLeagueRoundTeams
                          setWars={setWars}
                          warTag={warTag}
                          key={warIndex}
                        />
                      )
                  )}
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      ))}
    </>
  );
}
