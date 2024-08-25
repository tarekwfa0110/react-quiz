import React, { useState, useEffect } from "react";

export default function QuestionComponent({ question, onAnswer }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    // Reset selectedIndex when the question changes
    setSelectedIndex(null);
  }, [question]);

  // Handles a choice , when clicking on a choice , it accepts the index of the choice and the "option" from the map method,
  // then checks if no answer has been given already by if'ing the initial state of selected index,
  // sets the state of selectedIndex to the index of the chosen option and then passes the bool of the chosen answer is the answer or not to the passed handleAnswer function from the parent component
  const handleChoice = (index, option) => {
    if (selectedIndex === null) {
      setSelectedIndex(index);
      onAnswer(option === question.answer);
    }
  };

  // just sets the class of the button based on if the chosen button is the right answer or not,
  // if no option is chosen then the selectedIndex state will remain on its initial state (null) and will return an empty string

  const getButtonClass = (index, option) => {
    if (selectedIndex === null) return "";
    if (index === selectedIndex) {
      return option === question.answer ? "correct" : "wrong";
    }
    return option === question.answer ? "correct" : "";
  };

  return (
    <div className="question">
      <p>{question.question}</p>
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleChoice(index, option)}
          className={getButtonClass(index, option)}
          disabled={selectedIndex !== null}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
