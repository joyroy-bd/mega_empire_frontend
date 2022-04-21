import React, { Fragment } from "react";
import Loading from "../components/Loading";
import ClassicWarLogHeader from "../components/warlogInfo/ClassicWarLogHeader";
import WarLogRow from "../components/warlogInfo/WarLogRow";
import useClanInfo from "../hooks/useClanInfo";

export default function ClassicWarLog({ warLog = null }) {
  let { data, loading, error } = useClanInfo();

  return (
    <>
      {data && (
        <ClassicWarLogHeader
          win={data.warWins}
          loss={data.warLosses}
          tie={data.warTies}
        />
      )}
      <section className="container">
        <div className="clanwarlog">
          {warLog &&
            warLog.map((war, index) => {
              if (!war.opponent.clanLevel) {
                return <Fragment key={index}></Fragment>;
              }
              return <WarLogRow key={index} war={war} />;
            })}
          {loading && <Loading container error={error} loading={loading} />}
        </div>
      </section>
    </>
  );
}
