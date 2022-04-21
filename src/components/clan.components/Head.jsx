import React from "react";

export default function Head({ clanData }) {
  return (
    <>
      <section className="container">
        <div className="clan--head">
          <div className="clan--head_left">
            <img
              className="logo"
              src={clanData.badgeUrls.large}
              alt="Clan Logo"
            />

            <div className="clan-intro">
              <div className="clan-intro-info">
                <div className="clan-intro-nametag">
                  <h2>{clanData.name}</h2>
                  <small>{clanData.tag}</small>
                </div>
                <div className="share">
                  <i className="fa fa-share-nodes"></i>
                </div>
              </div>
              <p>{clanData.description}</p>
            </div>
          </div>
          <div className="clan--head_right">
            <table border="0">
              <tbody>
                <tr>
                  <td>Clan War League:</td>
                  <td>{clanData.warLeague.name}</td>
                </tr>
                <tr>
                  <td>Point (Home):</td>
                  <td>{clanData.clanPoints}</td>
                </tr>
                <tr>
                  <td>Point (Builder):</td>
                  <td>{clanData.clanVersusPoints}</td>
                </tr>
                <tr>
                  <td>Type:</td>
                  <td style={{ color: "#ff1111" }}>{clanData.type}</td>
                </tr>
                <tr>
                  <td>Require Trophies (Home):</td>
                  <td>{clanData.requiredTrophies}</td>
                </tr>
                <tr>
                  <td>Require Trophies (Builder):</td>
                  <td>{clanData.requiredVersusTrophies}</td>
                </tr>
                <tr>
                  <td>Require Town Hall</td>
                  <td>{clanData.requiredTownhallLevel}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>{clanData.location.name}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
