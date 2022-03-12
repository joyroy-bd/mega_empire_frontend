import React from "react";
import "../styles/greating.style.css"



export default function Greating() {
  return (
    <section className="greating-section">
      <div className="container">
        <div className="greating--card">
          <div className="greating--card_greating">
            <h1>Wellcome.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              soluta at placeat qui asperiores voluptatem nulla sunt. Cum
              commodi mollitia laboriosam facilis consectetur, nostrum
              voluptates expedita perferendis cumque fugit obcaecati!
            </p>
            <button id="joinus">Join us</button>
          </div>
          <div className="greating--card_image">
            <img
              src="https://api-assets.clashofclans.com/badges/512/jqabKPbWd6n4m2YWixgbHtNXRiwK3CrIagCzloAo_Z4.png"
              alt=""
            />
          </div>
          {/* <!-- <div className="greating--card_button">
                        <button>Join us.</button>
                    </div> --> */}
        </div>
      </div>
    </section>
  );
}
