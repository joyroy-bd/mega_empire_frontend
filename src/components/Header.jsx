import React from "react";
import "../styles/header.style.css";

export default function Header({clanInfo}) {
  return (
    <header className="header">
      <div className="container">
        <div className="brand">
          <img
            className="brand--logo"
            src={clanInfo.badgeUrls.large}
            alt="logo"
          />

          <div className="brand--name">
            <h2>{clanInfo.name}</h2>
            <small>{clanInfo.tag}</small>
            <h5>{clanInfo.description}</h5>
          </div>
        </div>
      </div>
    </header>
  );
}
