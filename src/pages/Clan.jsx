import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useSearchParams } from "react-router-dom";
import useClanInfo from "../hooks/useClanInfo";
import Nav from "../components/clan.components/Nav";
import "../styles/clan.page.css";
import BuilderBase from "../components/clan.components/BuilderBase";
import HomeBase from "../components/clan.components/HomeBase";
import Loading from "../components/Loading";
import Head from "../components/clan.components/Head";
import ClassicWarHeader from "../components/warlogInfo/ClassicWarLogHeader";

export default function Clan() {
  let [search] = useSearchParams();
  const [clanTag, setClanTag] = useState("#RRVJCJVY");

  useEffect(() => {
    setClanTag((pre) => {
      return search.get("tag") ? search.get("tag") : pre;
    });
  }, [search]);

  const { loading, data: clanData, error } = useClanInfo(clanTag);

  return (
    <main>
      {(loading || error) && (
        <Loading container={true} loading={loading} error={error} />
      )}
      {clanData && (
        <>
          <Nav />
          <Head clanData={clanData} />
          <ClassicWarHeader win={clanData.warWins} loss={clanData.warLosses} tie={clanData.warTies} />
          <Routes>
            <Route
              index
              path="home"
              element={
                <div className="container">
                  <HomeBase clanData={clanData} />
                </div>
              }
            />

            <Route
              path="builder"
              element={
                <div className="container">
                  <BuilderBase clanData={clanData} />
                </div>
              }
            />
            <Route
              path="*"
              element={<Navigate to={`home?${search.toString()}`} />}
            />
          </Routes>
        </>
      )}
    </main>
  );
}
