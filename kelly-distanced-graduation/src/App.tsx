import React, { useState } from "react";
import Trivia from "./pages/trivia/Index";
import { ScoreContext } from "./utils/ScoreContext";

function App() {
  const [score, setScore] = useState(0);

  return (
    <ScoreContext.Provider
      value={{
        score: score,
        increaseScore: () => setScore((prev) => score + 1),
      }}
    >
      <Trivia />
    </ScoreContext.Provider>
  );
}

export default App;
