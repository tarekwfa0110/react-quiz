import React from "react";
import QuestionComponent from "./QuestionComponent";

export default function QuizScreen({
  dispatch,
  currentQuestionIndex,
  totalQuestions,
  quizData,
}) {
  // if the passed bool is true, then it will dispatch the type to Answer_Question, and make the state isCorrect to 1, which gets added to the score of the inital value to calaculate the final score of the quiz

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
