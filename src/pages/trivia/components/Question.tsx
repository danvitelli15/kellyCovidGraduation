import React, { useEffect, useRef, useState } from "react";
import { Button, Card, CardBody } from "reactstrap";
import { ScoreContext } from "../../../utils/ScoreContext";
import { QuestionProps } from "../Interfaces";

import "../style/question.css";

let frozen = false;

const Question = (props: QuestionProps): JSX.Element => {
  const [answered, setAnswered] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [correctIndex, setCorrectIndex] = useState(0);
  const [options, setOptions] = useState<Array<string>>([]);

  const optionsRef = useRef(null);

  useEffect(() => {
    if (optionsRef.current) {
      // @ts-ignore : current is possibly null error handled by if statement
      optionsRef.current.focus();
    }
    setAnswered(false);
    setClickedIndex(-1);
    frozen = false;
    const insertIndex = Math.floor(Math.random() * (props.Question.WrongAnswers.length + 1));
    const optionsBuilder = props.Question.WrongAnswers.map((i) => i);
    optionsBuilder.splice(insertIndex, 0, props.Question.Answer);
    setCorrectIndex(insertIndex);
    setOptions(optionsBuilder);
  }, [props.Question]);

  const onAnswerClick = (clickedIndex: number) => {
    if (!frozen) {
      frozen = true;
      setClickedIndex(clickedIndex);
      setAnswered(true);

      setTimeout(() => props.SubmitAnswer(), 1500);
    }
  };

  return (
    <Card style={{ width: "100%" }}>
      <CardBody>
        <p>{props.Question.Question}</p>
        <legend className="col-form-label col-sm-2" ref={optionsRef} tabIndex={0}>
          Options
        </legend>
        <ScoreContext.Consumer>
          {({ increaseScore }) => (
            <>
              {options.map((option, index) => (
                <Button
                  block
                  color={
                    answered && (index === clickedIndex || index === correctIndex)
                      ? index === correctIndex
                        ? "success"
                        : "danger"
                      : "secondary"
                  }
                  key={`answer_${index}`}
                  onClick={() => {
                    if (index === correctIndex) increaseScore();
                    onAnswerClick(index);
                  }}
                >
                  {option}
                </Button>
              ))}
            </>
          )}
        </ScoreContext.Consumer>
      </CardBody>
    </Card>
  );
};

export default Question;
