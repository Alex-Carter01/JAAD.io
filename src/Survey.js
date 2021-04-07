import "./styles/Pages.css";
import * as React from "react";
import { useState } from "react";
import { Button } from "baseui/button";
import { Radio, RadioGroup } from "baseui/radio";
import { ArrowLeft, ArrowRight } from "baseui/icon";

import { survey_data } from "./data/survey_data";

import { SurveyResult } from "./SurveyResult";
import { predictCareer } from "./predict_career";

const SurveyStyle = {
  textAlign: "left",
  marginLeft: "40%",
  color: "black",
  fontSize: "120%",
};

const SurveyQuestion = (props) => {
  return (
    <div className="SurveyQuestion">
      <p className="SurveyQuestionHeader">{props.question.question}</p>
      <RadioGroup onChange={props.onChange} value={props.value}>
        {props.question.answers.map((answer, index) => {
          return (
            <Radio type="radio" id="" value={index.toString()}>
              {answer}
            </Radio>
          );
        })}
      </RadioGroup>
    </div>
  );
};

const createResponseArray = () => {
  const arr = Array(survey_data.length);
  arr.fill("0");
  return arr;
};

const Survey = () => {
  const [questionNumber, setQuestionNumber] = useState();
  const [responses, setResponses] = useState(createResponseArray());
  const [submitted, setSubmitted] = useState(false);

  const changeQuestion = (direction) => {
    if (direction == "left") {
      setQuestionNumber(
        questionNumber > 0 ? questionNumber - 1 : questionNumber
      );
    } else if (direction == "right") {
      setQuestionNumber(
        questionNumber < survey_data.length - 1
          ? questionNumber + 1
          : questionNumber
      );
    } else if (direction == "submit") {
      setSubmitted(true);
    }
  };

  if (!survey_data[questionNumber]) {
    setQuestionNumber(0);
  }

  return (
    <div className="Survey" style={SurveyStyle}>
      {submitted && <SurveyResult career={predictCareer(responses)} />}
      {!submitted && survey_data[questionNumber] && (
        <SurveyQuestion
          question={survey_data[questionNumber]}
          value={responses[questionNumber]}
          onChange={(e) => {
            const new_responses = responses;
            new_responses[questionNumber] = e.target.value;
            setResponses([...new_responses]);
          }}
        />
      )}
      {!submitted && (
        <div>
          <Button onClick={() => changeQuestion("left")}>
            <ArrowLeft size={64} />
            text
          </Button>
          <Button
            onClick={() => changeQuestion("submit")}
            disabled={questionNumber != survey_data.length - 1}
          >
            Submit
          </Button>
          <Button onClick={() => changeQuestion("right")}>
            <ArrowRight size={64} />
            text
          </Button>
        </div>
      )}
    </div>
  );
};

export default Survey;
