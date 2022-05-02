import React, { useRef } from "react";
import "../styles/nav.style.css";
import { Link } from "react-router-dom";

export default function Nav() {
  let pageNav = useRef(0);
  let aboutList = useRef(0);
  function toggleNav() {
    if (pageNav.current.classList.contains("navShow")) {
      pageNav.current.classList.remove("navShow");
      pageNav.current.classList.add("navHide");
    } else if (pageNav.current.classList.contains("navHide")) {
      pageNav.current.classList.remove("navHide");
      pageNav.current.classList.add("navShow");
    }
  }
  function aboutToggle() {
    if (aboutList.current.classList.contains("hideabout")) {
      aboutList.current.classList.remove("hideabout");
      aboutList.current.classList.add("showabout");
    } else if (aboutList.current.classList.contains("showabout")) {
      aboutList.current.classList.remove("showabout");
      aboutList.current.classList.add("hideabout");
    }
  }

  function getHome() {
    let x = document.createElement("a");
    x.setAttribute("href", "/");
    x.click();
  }

  return (
    <>
      <aside className="nav navHide" ref={pageNav} id="nav">
        <div className="nav-container">
          <div onClick={getHome} className="nav--info">
            <img
              src="https://api-assets.clashofclans.com/badges/70/jqabKPbWd6n4m2YWixgbHtNXRiwK3CrIagCzloAo_Z4.png"
              alt="logo"
            />
            <span>Mega Empire</span>
          </div>
          <ul className="nav--list">
            <li>
              <Link className="nav--list_btn active" to="/clan">
                Clan
              </Link>
            </li>
            <li>
              <Link className="nav--list_btn" to="/members">
                Members
              </Link>
            </li>
            <li>
              <Link className="nav--list_btn" to="/war">
                War
              </Link>
            </li>
            <li>
              <Link className="nav--list_btn" to="/warleague">
                War League
              </Link>
            </li>
            <li>
              <div className="nav--list_about">
                <button className="nav--list_about--btn" onClick={aboutToggle}>
                  Find
                </button>
                <ul className="nav--list_about--list hideabout" ref={aboutList}>
                  <li>
                    <form
                      className="nav--list_about--list_item"
                      action="/clan"
                      method="get"
                    >
                      <input type="search" name="tag" />
                      <button type="submit">Find</button>
                    </form>
                  </li>
                  <li>
                    <Link to="/" className="nav--list_about--list_item">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/#c" className="nav--list_about--list_item">
                      Feedback
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#greating"
                      className="nav--list_about--list_item"
                    >
                      Greating
                    </Link>
                  </li>
                </ul>
                <div className="clear"></div>
              </div>
            </li>
          </ul>
        </div>

        <div className="nav--toggle">
          <button onClick={toggleNav} className="">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        </div>
      </aside>
    </>
  );
}
