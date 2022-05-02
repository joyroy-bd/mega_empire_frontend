import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function findPlayer(allPlayer, playerTag) {
  //console.log(allPlayer, playerTag);
  let player = allPlayer.filter((player) => player.tag === playerTag);
  return player[0];
}

export default function CurrentWarFooter({
  showdetails,
  setShowdetails,
  data,
}) {
  let { show, player, opponent } = showdetails;
  if (!player) {
    return <></>;
  }
  let opponentClanMembers = data[opponent].members;
  
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
            Attack remain: {player.attacks ? 2 - player.attacks.length : 2}
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
                        <div className="name">
                          {
                            findPlayer(opponentClanMembers, attack.defenderTag)
                              .name
                          }
                        </div>
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
              <small>Attacked By</small>
              {player.bestOpponentAttack ? (
                <>
                  <div className="row">
                    <div className="name">
                      {}
                      {
                        findPlayer(
                          opponentClanMembers,
                          player.bestOpponentAttack.attackerTag
                        ).name
                      }
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
