import React, { useState } from "react";
import Trivia from "./pages/trivia/Index";
import { ScoreContext } from "./utils/ScoreContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";

function App() {
  const [score, setScore] = useState(0);

  return (
    <ScoreContext.Provider
      value={{
        score: score,
        increaseScore: () => setScore((prev) => score + 1),
      }}
    >
      <Router>
        <Switch>
          <Route path="/trivia">
            <Trivia />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ScoreContext.Provider>
  );
}

export default App;
