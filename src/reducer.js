export const initialState = {
    screen: "start",
    currentQuestionIndex: 0,
    score: 0,
    highScore: 0,
  };
  
  export function reducer(state, action) {
    switch (action.type) {
      case "START_QUIZ":
        return { ...state, screen: "quiz", currentQuestionIndex: 0, score: 0 };
      case "NEXT_QUESTION":
        return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
      case "ANSWER_QUESTION":
        return { ...state, score: state.score + action.payload };
      case "FINISH_QUIZ":
        const newHighScore = Math.max(state.score, state.highScore);
        return { ...state, screen: "finish", highScore: newHighScore };
      case "RESTART_QUIZ":
        return { ...initialState, highScore: state.highScore };
      default:
        return state;
    }
  }