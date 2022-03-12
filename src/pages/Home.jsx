import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Greating from "../components/Greating";
import Labels from "../components/Labels";
import WarLeagueSection from "../components/WarLeagueSection";

export default function Home({ clanInfo }) {
  return (
    <>
      <Header />
      <Nav />
      <Greating />
      <Labels clanInfo={clanInfo} />
      <WarLeagueSection clanInfo={clanInfo} />
    </>
  );
}
