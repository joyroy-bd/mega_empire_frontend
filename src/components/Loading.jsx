import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/loading.css";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Loading({ container, loading, error }) {
  return (
    <section className={container ? "container" : ""}>
      <div className="loading">
          {loading && <span className="text">Loading</span>}
          {error && <span className="text">Error</span>}
       
        {error ? (
          <span className="icone">
            <FontAwesomeIcon className="spin" icon={faSpinner} />
          </span>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
