import React from "react";

export default function ClassicWarHeader({win,loss,tie}) {
  return (
    <>
      <section className="container">
        <div className="clanwarsinfo-section">
          <div className="clanwarsinfo--status">
            <p>War Stats</p>
          </div>
          <div className="clanwarsinfo--win">
            <span className="win-green">Wins:</span>
            <br /> {win}
          </div>
          <div className="clanwarsinfo--loss">
            <span className="loss-red">Losses:</span>
            <br />
            {loss}
          </div>
          <div className="clanwarsinfo--tie">
            <span className="tie-white">Draws:</span>
            <br />{tie}
          </div>
          <div className="clanwarsinfo--total">
            <span className="total">Total:</span>
            <br />
            {win+loss+tie}
          </div>
        </div>
      </section>
    </>
  );
}
