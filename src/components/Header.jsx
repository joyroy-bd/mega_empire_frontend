import React from "react";
import "../styles/header.style.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="brand">
          <img
            className="brand--logo"
            src="https://api-assets.clashofclans.com/badges/512/jqabKPbWd6n4m2YWixgbHtNXRiwK3CrIagCzloAo_Z4.png"
            alt="logo"
          />

          <div className="brand--name">
            <h2>MEGA EMPIRE</h2>
            <small>#RRVJCJVY</small>
            <h5>Join here for donat @ co-leader</h5>
          </div>
        </div>
      </div>
    </header>
  );
}
