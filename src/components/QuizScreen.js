import React from "react";
import QuestionComponent from "./QuestionComponent";

export default function QuizScreen({
  dispatch,
  currentQuestionIndex,
  totalQuestions,
  quizData,
}) {
  const handleAnswer = (isCorrect) => {
    dispatch({ type: "ANSWER_QUESTION", payload: isCorrect ? 1 : 0 });
  };

  const handleNext = () => {
    if (currentQuestionIndex === totalQuestions - 1) {
      dispatch({ type: "FINISH_QUIZ" });
    } else {
      dispatch({ type: "NEXT_QUESTION" });
    }
  };

  return (
    <div className="quiz-screen">
      <QuestionComponent
        question={quizData[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
      <button onClick={handleNext}>
        {currentQuestionIndex === totalQuestions - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
}
