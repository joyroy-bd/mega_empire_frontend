import React from "react";
import th_1 from "../../img/th_1.png";
import th_2 from "../../img/th_2.png";
import th_3 from "../../img/th_3.png";
import th_4 from "../../img/th_4.png";
import th_5 from "../../img/th_5.png";
import th_6 from "../../img/th_6.png";
import th_7 from "../../img/th_7.png";
import th_8 from "../../img/th_8.png";
import th_9 from "../../img/th_9.png";
import th_10 from "../../img/th_10.png";
import th_11 from "../../img/th_11.png";
import th_12 from "../../img/th_12.png";
import th_13 from "../../img/th_13.png";
import th_14 from "../../img/th_14.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function thIcone(th) {
  switch (th) {
    case 1:
      return th_1;
    case 2:
      return th_2;
    case 3:
      return th_3;
    case 4:
      return th_4;
    case 5:
      return th_5;
    case 6:
      return th_6;
    case 7:
      return th_7;
    case 8:
      return th_8;
    case 9:
      return th_9;
    case 10:
      return th_10;
    case 11:
      return th_11;
    case 12:
      return th_12;
    case 13:
      return th_13;
    case 14:
      return th_14;

    default:
      return th_1;
  }
}
function Player({ player, setShowdetails, opponent }) {
  const viewDetailes = () => {
    setShowdetails((pre) => {
      return { show: !pre.show, player: player, opponent: opponent };
    });
  };
  return (
    <>
      <div className="team-player" onClick={viewDetailes}>
        {player.bestOpponentAttack ? (
          <>
            <span className="team-player-star">
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
          </>
        ) : (
          <>
            <span className="team-player-star"></span>
          </>
        )}
        <img
          src={thIcone(player.townhallLevel)}
          className="team-player-th"
          alt=""
        />
        <span className="team-player-name">
          {player.mapPosition}.{player.name}
        </span>
      </div>
    </>
  );
}

export default function CurrentWarMain({ data, setShowdetails, children }) {
  data.clan.members.sort((next, current) => {
    let currMapPosi = current.mapPosition;
    let nextMapPosi = next.mapPosition;

    if (nextMapPosi > currMapPosi) {
      return +1;
    } else {
      return -1;
    }
  });

  data.opponent.members.sort((next, current) => {
    let currMapPosi = current.mapPosition;
    let nextMapPosi = next.mapPosition;

    if (nextMapPosi > currMapPosi) {
      return +1;
    } else {
      return -1;
    }
  });
  return (
    <>
      <div className="currentwar--body">
        <div className="currentwar--body-teams">
          <div className="currentwar--body_team">
            {data.clan.members.map((member, index) => (
              <Player
                key={index}
                player={member}
                setShowdetails={setShowdetails}
                opponent={"opponent"}
                data={data}
              />
            ))}
          </div>

          <div className="currentwar--body_team active">
            {data.opponent.members.map((member, index) => (
              <Player
                key={index}
                player={member}
                setShowdetails={setShowdetails}
                opponent={"clan"}
                data={data}
              />
            ))}
          </div>
        </div>
        <div className="toogle-container">
          <button>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>

        {children}
      </div>
    </>
  );
}
