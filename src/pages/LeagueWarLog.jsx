import React from "react";
import WarLeagueTeams from "../components/warlogInfo/WarLeagueTeams";
import useClanLeagueGroup from "../hooks/useClanLeagueGroup";
import "../styles/warLeagues.css";
import Loading from "../components/Loading";
import WarLeagueRounds from "../components/warlogInfo/WarLeagueRounds";

export default function LeagueWarLog() {
  let { data: leagueInfo, error, loading } = useClanLeagueGroup("#RRVJCJVY");
  // console.log("Page Render");

  return (
    <>
      {leagueInfo && <WarLeagueTeams leagueInfo={leagueInfo} />}
      {leagueInfo && <WarLeagueRounds leagueRounds={leagueInfo.rounds} />}
      {!leagueInfo && <Loading loading={loading} error={error} container />}
    </>
  );
}
