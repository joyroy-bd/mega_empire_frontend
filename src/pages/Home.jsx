import React from "react";
import FeedBackForm from "../components/FeedBackForm";
import Greating from "../components/Greating";
import Labels from "../components/Labels";
import WarLeagueSection from "../components/WarLeagueSection";

export default function Home({ clanInfo }) {
  return (
    <>
      <Greating clanInfo={clanInfo} />
      <Labels clanInfo={clanInfo} />
      <WarLeagueSection clanInfo={clanInfo} />
      <FeedBackForm />
    </>
  );
}
