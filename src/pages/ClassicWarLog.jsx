import React from "react";
import ClassicWarHeader from "../components/warlogInfo/ClassicWarHeader";
import CurrentWar from "../components/warlogInfo/CurrentWar";
import WarLogRow from "../components/warlogInfo/WarLogRow";
import useClanInfo from "../hooks/useClanInfo";

export default function ClassicWarLog({ warLog = null }) {
  let { data, loading } = useClanInfo();

  return (
    <>
      <CurrentWar />
      {data && (
        <ClassicWarHeader
          win={data.warWins}
          loss={data.warLosses}
          tie={data.warTies}
        />
      )}
      <section className="container">
        <div className="clanwarlog">
          {warLog &&
            warLog.map((war, index) => <WarLogRow key={index} war={war} />)}
          {loading && <p className="container">Loading...</p>}
        </div>
      </section>
    </>
  );
}
