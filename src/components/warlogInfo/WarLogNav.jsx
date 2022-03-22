import React from "react";
import swords from "../../img/swords.png";
import sword from "../../img/sword.png";
import { Link, useLocation } from "react-router-dom";

export default function WarLogNav() {
  let nav = useLocation();
  let path = nav.pathname.split("/");
  path = path[path.length - 1];
  return (
    <section className="container">
      <div className="warlognav">
        <Link
          to="classic"
          className={`warlognav--btn ${path === "classic" ? "active" : ""}`}
        >
          <span className="warlognav--btn_icon">
            <img src={sword} alt="" />
          </span>
          <span className="warlognav--btn_text">Classic</span>
        </Link>
        <Link
          to="league"
          className={`warlognav--btn ${path === "league" ? "active" : ""}`}
        >
          <span className="warlognav--btn_icon">
            <img src={swords} alt="" />
          </span>
          <span className="warlognav--btn_text">War League</span>
        </Link>
      </div>
    </section>
  );
}
