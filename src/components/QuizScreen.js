import React, { useState, useEffect } from "react";
import QuestionComponent from "./QuestionComponent";

export default function QuizScreen({
  dispatch,
  currentQuestionIndex,
  totalQuestions,
  quizData,
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsTimeUp(true); // Mark that time is up
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleNext = () => {
    if (currentQuestionIndex === totalQuestions - 1) {
      dispatch({ type: "FINISH_QUIZ" });
    } else {
      dispatch({ type: "NEXT_QUESTION" });
      setSelectedIndex(null); // Reset selected answer for the next question
      setIsTimeUp(false); // Reset time up flag
      setTimeLeft(5); // Reset timer for next question
    }
  };

  return (
    <div className="quiz-screen">
      <QuestionComponent
        question={quizData[currentQuestionIndex]}
        onAnswer={(isCorrect) =>
          dispatch({ type: "ANSWER_QUESTION", payload: isCorrect ? 1 : 0 })
        }
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        isTimeUp={isTimeUp} // Disable options if time is up
      />

      <button
        onClick={handleNext}
        disabled={!isTimeUp && selectedIndex == null}
      >
        {currentQuestionIndex === totalQuestions - 1 ? "Finish" : "Next"}
      </button>

      <div>Time Left: {timeLeft}s</div>
    </div>
  );
}
