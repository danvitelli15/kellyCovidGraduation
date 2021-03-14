import React from "react";
import { Card, CardHeader, Container, Row } from "reactstrap";
import Question from "./components/Question";
import { TriviaProps } from "./Interfaces";

import Questions from "../../utils/TriviaQuestions";

const Trivia = (props: TriviaProps): JSX.Element => {
  return (
    <Container>
      <h1>Trivia</h1>
      <Row>
        <Card style={{ width: "100%" }}>
          <CardHeader>Score</CardHeader>
        </Card>
      </Row>
      <Row>
        <Question Question={Questions[0]} />
      </Row>
    </Container>
  );
};

export default Trivia;
