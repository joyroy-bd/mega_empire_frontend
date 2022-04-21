import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";

export default function Nav() {
  let [search] = useSearchParams();
  return (
    <>
      <section className="container">
        <div className="clan--nav">
          <NavLink to={`home?${search.toString()}`} className="clan--nav_btn">
            Home Village
          </NavLink>
          <NavLink
            to={`builder?${search.toString()}`}
            className="clan--nav_btn"
          >
            Builder
          </NavLink>
        </div>
      </section>
    </>
  );
}
