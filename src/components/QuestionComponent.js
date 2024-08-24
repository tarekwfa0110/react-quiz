import React, { useState, useEffect } from "react";

export default function QuestionComponent({ question, onAnswer }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    // Reset selectedIndex when the question changes
    setSelectedIndex(null);
  }, [question]);

  const handleChoice = (index, option) => {
    if (selectedIndex === null) {
      setSelectedIndex(index);
      onAnswer(option === question.answer);
    }
  };

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
