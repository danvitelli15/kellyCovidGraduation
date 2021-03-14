import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { QuestionProps } from "../Interfaces";

const Question = (props: QuestionProps): JSX.Element => {
  const [correctIndex, setCorrectIndex] = useState(0);
  const [options, setOptions] = useState<Array<string>>([]);

  useEffect(() => {
    const insertIndex = Math.floor(Math.random() * (props.Question.WrongAnswers.length + 1));
    const optionsBuilder = props.Question.WrongAnswers.map((i) => i);
    optionsBuilder.splice(insertIndex, 0, props.Question.Answer);
    setCorrectIndex(insertIndex);
    setOptions(optionsBuilder);
  }, [props.Question]);

  return (
    <Card style={{ width: "100%" }}>
      <CardBody>
        <Form>
          <p>{props.Question.Question}</p>
          <FormGroup tag="fieldset" row>
            <legend className="col-form-label col-sm-2">Options</legend>
            <Col sm={10}>
              {options.map((option, index) => (
                <FormGroup check>
                  <Input type="radio" name={`option${index}`} id={`answers-option${index}`} />
                  <Label check for={`answers-option${index}`}>
                    {option}
                  </Label>
                </FormGroup>
              ))}
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
};

export default Question;
