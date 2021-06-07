import React, { useState } from "react";
import { Card, CardHeader, Container, Row } from "reactstrap";
import Question from "./components/Question";
import { TriviaProps } from "./Interfaces";

import Questions from "../../utils/TriviaQuestions";
import { ScoreContext } from "../../utils/ScoreContext";

const Trivia = (props: TriviaProps): JSX.Element => {
  const [questionNumber, setQuestionNumber] = useState(0);

  const answer = () => {
    setQuestionNumber((index) => index + 1);
  };

  return (
    <Container>
      <h1>Trivia</h1>
      <Row>
        <Card style={{ width: "100%" }}>
          <CardHeader>
            <ScoreContext.Consumer>{({ score }) => <>Score: {score}</>}</ScoreContext.Consumer>
          </CardHeader>
          <Question Question={Questions[questionNumber]} SubmitAnswer={answer} />
        </Card>
      </Row>
    </Container>
  );
};

export default Trivia;
