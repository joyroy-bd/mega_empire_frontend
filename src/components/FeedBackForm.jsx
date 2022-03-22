import React, { useRef, useState } from "react";
import "../styles/feedbackForm.css";
import useDatabase from "../hooks/useDataBase";
import { ref, push, set } from "firebase/database";

export default function FeedBackForm() {
  const db = useDatabase();
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const btn = useRef(null);

  function handelInput(e) {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "body":
        setBody(e.target.value);
        break;
      default:
        break;
    }
  }
  function handelSubmit(e) {
    e.preventDefault();
    if (email && body) {
      set(push(ref(db, "feedback/")), {
        email: email,
        body: body,
      }).then((res) => {
        alert("Feedback Send");
      });
    } else {
    }
  }

  return (
    <>
      <section className="feedback-section" id="feedback">
        <div className="container">
          <form
            className="feedback--form"
            id="feedback"
            onSubmit={handelSubmit}
          >
            <h2 className="section-title">Your Feedback</h2>
            <div className="feedback--form_email">
              <span>
                <i className="fa-solid fa-at"></i>
              </span>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Your E-mail"
                onChange={handelInput}
              />
              <span>
                <i className="fa-solid fa-circle-check"></i>
              </span>
            </div>
            <textarea
              className="feedback--form_body"
              placeholder="Write something..."
              rows="15"
              name="body"
              value={body}
              onChange={handelInput}
            ></textarea>

            <button ref={btn} className="feedback--form_submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
