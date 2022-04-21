import React, { useState } from "react";
import WarLeagueTeams from "../components/warlogInfo/WarLeagueTeams";
import useClanLeagueGroup from "../hooks/useClanLeagueGroup";
import "../styles/warLeagues.css";
import Loading from "../components/Loading";
import WarLeagueRounds from "../components/warlogInfo/WarLeagueRounds";

export default function LeagueWarLog() {
  let { data: leagueInfo, error, loading } = useClanLeagueGroup("#RRVJCJVY");
  const [wars, setWars] = useState([]);
  // console.log("League Page Render");
  console.log(leagueInfo);
  console.log(error);

  return (
    <>
      {leagueInfo && <WarLeagueTeams wars={wars} leagueInfo={leagueInfo} />}
      {leagueInfo && (
        <WarLeagueRounds setWars={setWars} leagueRounds={leagueInfo.rounds} />
      )}
      {!leagueInfo && <Loading loading={loading} error={error} container />}
    </>
  );
}
