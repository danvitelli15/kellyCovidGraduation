import React, { useState } from "react";
import { Card, CardHeader, Container, Row } from "reactstrap";
import Question from "./components/Question";
import { TriviaProps } from "./Interfaces";

import Questions from "../../utils/TriviaQuestions";
import { ScoreContext } from "../../utils/ScoreContext";
import Results from "./components/Results";

const Trivia = (props: TriviaProps): JSX.Element => {
  const [completed, setCompleted] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);

  const answer = () => {
    if (questionNumber + 1 < Questions.length) {
      setQuestionNumber((index) => index + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <Container>
      <h1>Trivia</h1>
      <Row>
        {completed ? (
          <Results />
        ) : (
          <Card style={{ width: "100%" }}>
            <CardHeader>
              <ScoreContext.Consumer>{({ score }) => <>Score: {score}</>}</ScoreContext.Consumer>
            </CardHeader>
            <Question Question={Questions[questionNumber]} SubmitAnswer={answer} />
          </Card>
        )}
      </Row>
    </Container>
  );
};

export default Trivia;
