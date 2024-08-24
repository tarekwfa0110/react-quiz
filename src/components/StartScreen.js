import React from "react";

export default function StartScreen({ dispatch, totalQuestions }) {
  return (
    <div className="start-screen">
      <h2>Welcome to The Ultimate Quiz!</h2>
      <p>{totalQuestions} Questions to test your skills</p>
      <button onClick={() => dispatch({ type: "START_QUIZ" })}>
        Let's start
      </button>
    </div>
  );
}
