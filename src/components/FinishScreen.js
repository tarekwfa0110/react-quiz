import React from "react";

export default function FinishScreen({
  score,
  totalQuestions,
  highScore,
  dispatch,
}) {
  return (
    <div className="finish-screen">
      <h2>Quiz Completed!</h2>
      <p>
        You scored {score} out of {totalQuestions}
      </p>
      <p>High Score: {highScore}</p>
      <button onClick={() => dispatch({ type: "RESTART_QUIZ" })}>
        Try Again
      </button>
    </div>
  );
}
