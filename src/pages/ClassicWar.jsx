import React from "react";
import CurrentWar from "../components/warlogInfo/CurrentWar";
import ClassicWarLog from "./ClassicWarLog";

export default function ClassicWar({ warLog }) {
  return (
    <>
      <CurrentWar />
      <ClassicWarLog warLog={warLog} />
    </>
  );
}
