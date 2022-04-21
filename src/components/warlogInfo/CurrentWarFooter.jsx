import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function CurrentWarFooter({
  showdetails,
  setShowdetails,
  data
}) {
  let { show, player,opponent } = showdetails;
  if (!player) {
    return <></>;
  }
  let playerOpponentClanMembers = data[opponent].members
  console.log(player)
  console.log(playerOpponentClanMembers)
  return (
    <>
      <div
        className={`details--container ${show && "hide"}`}
        onClick={() => {
          setShowdetails(false);
        }}
      >
        <div className="currentwar--footer_main-details">
          <h2>
            {player.mapPosition}.{player.name}
          </h2>

          <small>
            Attack remain: {2 - player.attacks ? 2 - player.attacks.length : 2}
          </small>
          <hr />
          <div className="details-table">
            <div className="col">
              <small>Attack</small>
              {player.attacks ? (
                <>
                  {player.attacks.map((attack, ind) => (
                    <Fragment key={ind}>
                      <div className="row">
                        <div className="name">{attack.defenderTag}</div>
                        <small>{attack.destructionPercentage}%</small>
                        <span className="stars">
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                      </div>
                    </Fragment>
                  ))}
                </>
              ) : (
                ""
              )}
            </div>
            <div className="col">
              <small>Deffnce</small>
              {player.bestOpponentAttack ? (
                <>
                  <div className="row">
                    <div className="name">
                      {player.bestOpponentAttack.attackerTag}
                    </div>
                    <small>
                      {player.bestOpponentAttack.destructionPercentage}%
                    </small>
                    <span className="stars">
                      <FontAwesomeIcon
                        style={{
                          color: `${
                            player.bestOpponentAttack.stars > 0 ? "#fff" : "000"
                          }`,
                        }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{
                          color: `${
                            player.bestOpponentAttack.stars > 1 ? "#fff" : "000"
                          }`,
                        }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{
                          color: `${
                            player.bestOpponentAttack.stars > 2 ? "#fff" : "000"
                          }`,
                        }}
                        icon={faStar}
                      />
                    </span>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//615316597

/**
 
<>
      <div
        className={`currentwar--footer-container ${show ? "" : "hide"}`}
        onClick={() => {
          setShowdetails({ show: false, data: null });
        }}
      >
        <div className="currentwar--footer">
          <div className="currentwar--footer_main">
            <div className="currentwar--footer_main-details">
              <h2>
                {data.mapPosition}.{data.name}
              </h2>

              <small>
                Attack remain: {2 - data.attacks ? 2 - data.attacks.length : 2}
              </small>
              <hr />
              
            </div>
          </div>
        </div>
      </div>
    </>

 */
