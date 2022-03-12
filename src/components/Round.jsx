import React from "react";
import WarInfo from "./WarInfo";

export default function Round({round,roundIndex}) {
  return (
    <div class="warleague--rounds_round">
      <h2 class="league-title">Round {roundIndex + 1}</h2>
      {round.warTags.map(tag=>{
          return <>
          <WarInfo tag={tag} />
          </>
      })}
    </div>
  );
}
