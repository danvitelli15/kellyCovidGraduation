import React from "react";
import { Jumbotron } from "reactstrap";
import { ScoreContext } from "../../../utils/ScoreContext";

const Results = () => {
  const condesending = (score: number) => {
    if (score <= 10) {
      return <p>Maybe you should go ask Kelly a little about herself...</p>;
    } else if (score <= 20) {
      return <p>You seem to know a fair amount about Kelly.</p>;
    } else {
      return <p>You should go tell Kelly how well you know her.</p>;
    }
  };

  return (
    <Jumbotron>
      <ScoreContext.Consumer>
        {({ score }) => (
          <>
            <h2>Thanks for trying the trivia. You got {score} questions right!</h2>
            {condesending(score)}
          </>
        )}
      </ScoreContext.Consumer>
      <p>Food is availble in the garage.</p>

    </Jumbotron>
  );
};

export default Results;
