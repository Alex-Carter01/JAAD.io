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
  justifyContent: "flex-center",
  alignSelf: "flex-center",
  marginLeft: "300px",
  marginRight: "300px",
  marginTop: "200px",
  marginBottom: "200px",
  padding: "0px 10px 10px 10px",
  color: "black",
  fontSize: "40px",
  fontFamily: "Lato",
  backgroundColor: "#DCFBCE",
};

const bottomStyle = {
  padding: "0px 10px 0px 10px",
  alignSelf: "flex-center",
  fontFamily: "Lato",
};

const submitStyle = {
  fontFamily: "Lato",
  marginLeft: "50px",
  marginRight: "50px",
  padding: "10px 30px 10px 30px",
  backgroundColor: "#293D20",
  color: "#FFFFFF",
  fontSize: "30px",
};

const SurveyQuestion = (props) => {
  return (
    <div className="SurveyQuestion" style={SurveyStyle}>
      <p className="SurveyQuestionHeader">{props.question.question}</p>
      <RadioGroup onChange={props.onChange} value={props.value}>
        {[
          "Definitely Not",
          "Probably Not",
          "Neutral",
          "Probably",
          "Definitely",
        ].map((answer, index) => {
          return (
            <Radio type="radio" value={index.toString()}>
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
      {submitted && <SurveyResult careers={predictCareer(responses)} />}
      {!submitted && survey_data[questionNumber] && (
        <div>
          In a career, can you see yourself...
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
            <ArrowLeft size={64} />
            prev
          </Button>
          <Button
            onClick={() => changeQuestion("submit")}
            disabled={questionNumber != survey_data.length - 1}
          >
            Submit
          </Button>
          <Button onClick={() => changeQuestion("right")} style={bottomStyle}>
            <ArrowRight size={64} />
            next
          </Button>
        </div>
      )}
    </div>
  );
};

export default Survey;
