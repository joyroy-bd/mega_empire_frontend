import React, { useState } from "react";
import WarLeagueTeams from "../components/warlogInfo/WarLeagueTeams";
import useClanLeagueGroup from "../hooks/useClanLeagueGroup";
import "../styles/warLeagues.css";
import WarLeagueRounds from "../components/warlogInfo/WarLeagueRounds";
import { useSearchParams } from "react-router-dom";

export default function LeagueWarLog() {
  let [URLSearchParams] = useSearchParams();
  let clanTag = URLSearchParams.get("tag");
  let {
    data: leagueInfo,
    error,
    loading,
  } = useClanLeagueGroup(clanTag ? clanTag : "#RRVJCJVY");

  const [wars, setWars] = useState([]);
  // console.log("League Page Render");
  // console.log(leagueInfo);
  // console.log(error);

  return (
    <>
      {leagueInfo && <WarLeagueTeams wars={wars} leagueInfo={leagueInfo} />}
      {leagueInfo && (
        <WarLeagueRounds setWars={setWars} leagueRounds={leagueInfo.rounds} />
      )}
      {!loading && !leagueInfo && (
        <p style={{ textAlign: "center" }}>{error.reason}</p>
      )}
    </>
  );
}
