import React from "react";
import useClanWarlog from "../hooks/useClanWarlog";
import "../styles/warlogInfo.css";
import WarLogNav from "../components/warlogInfo/WarLogNav";
import { Routes, Route, Navigate } from "react-router-dom";
import LeagueWarLog from "./LeagueWarLog";
import ClassicWarLog from "./ClassicWarLog";

export default function Warinfo() {
  let { data } = useClanWarlog();

  return (
    <>
      <WarLogNav />
      <Routes>
        <Route
          index
          path="classic"
          element={<ClassicWarLog warLog={data ? data.items : null} />}
        />
        <Route path="league" element={<LeagueWarLog />} />
        <Route path="*" element={<Navigate to="classic" />} />
      </Routes>
    </>
  );
}
