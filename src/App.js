import React, { useReducer } from "react";

import { reducer, initialState } from "./reducer";
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import FinishScreen from "./components/FinishScreen";
import "./styles.css";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "J.K. Rowling",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "Which element is needed for the process of photosynthesis?",
    options: ["Carbon", "Oxygen", "Nitrogen", "Chlorophyll"],
    answer: "Chlorophyll",
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Marie Curie"],
    answer: "Albert Einstein",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    answer: "Diamond",
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "South Korea"],
    answer: "Japan",
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
];

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>THE ULTIMATE QUIZ</h1>
      <hr />

      {state.screen === "start" && (
        <StartScreen dispatch={dispatch} totalQuestions={quizData.length} />
      )}

      {state.screen === "quiz" && (
        <>
          <p className="question-number">
            Question {state.currentQuestionIndex + 1} of {quizData.length}
          </p>

          <QuizScreen
            dispatch={dispatch}
            currentQuestionIndex={state.currentQuestionIndex}
            totalQuestions={quizData.length}
            quizData={quizData}
          />
        </>
      )}

      {state.screen === "finish" && (
        <FinishScreen
          score={state.score}
          totalQuestions={quizData.length}
          highScore={state.highScore}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}
