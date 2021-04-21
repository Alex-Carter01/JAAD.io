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
  margin: "auto",
  marginTop: "100px",
  padding: "20px 10px 20px 10px",
  color: "black",
  fontSize: "26px",
  fontFamily: "Lato",
  backgroundColor: "#DCFBCE",
};

const bottomStyle = {
  padding: "0px 10px 0px 10px",
  width: "100px",
  fontFamily: "Lato",
  borderRadius: "10px",
  fontSize: "20px",
};

const radioResponseStyle = {};

const radioGroupStyle = {};

const submitStyle = {
  fontFamily: "Lato",
  marginLeft: "50px",
  marginRight: "50px",
  padding: "10px 30px 10px 30px",
  backgroundColor: "#293D20",
  color: "#FFFFFF",
  fontSize: "30px",
  borderRadius: "10px",
};

const submitDisabledStyle = {
  ...submitStyle,
  backgroundColor: "#e3edde",
};

const SurveyQuestion = (props) => {
  return (
    <div className="SurveyQuestion" style={SurveyStyle}>
      <h3 className="SurveyQuestionHeader">{props.question.question}</h3>
      <RadioGroup
        onChange={props.onChange}
        value={props.value}
        style={radioGroupStyle}
      >
        {[
          "Definitely Not",
          "Probably Not",
          "Neutral",
          "Probably",
          "Definitely",
        ].map((answer, index) => {
          return (
            <Radio type="radio" value={index.toString()}>
              <span>{answer}</span>
              <br />
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

  const submitDisabled = questionNumber != survey_data.length - 1;

  return (
    <div className="Survey" style={SurveyStyle}>
      {submitted && <SurveyResult careers={predictCareer(responses)} />}
      {!submitted && survey_data[questionNumber] && (
        <div>
          <span>In a career, can you see yourself... </span>
          <span>
            {"        "}({questionNumber + 1}/{survey_data.length})
          </span>
          <SurveyQuestion
            question={survey_data[questionNumber]}
            value={responses[questionNumber]}
            onChange={(e) => {
              const new_responses = responses;
              new_responses[questionNumber] = e.target.value;
              setResponses([...new_responses]);
            }}
          />
        </div>
      )}
      {!submitted && (
        <div>
          <Button onClick={() => changeQuestion("left")} style={bottomStyle}>
            <ArrowLeft />
            prev
          </Button>
          <Button
            onClick={() => changeQuestion("submit")}
            disabled={submitDisabled}
            style={!submitDisabled ? submitStyle : submitDisabledStyle}
          >
            Submit
          </Button>
          <Button onClick={() => changeQuestion("right")} style={bottomStyle}>
            <ArrowRight />
            next
          </Button>
        </div>
      )}
    </div>
  );
};

export default Survey;
