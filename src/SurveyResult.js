import "./styles/Pages.css";
import * as React from "react";

const surveyResultsStyling = {
  display: "grid",
  gridTemplateColumns: "auto auto auto",
};

const surveyResultStyling = {
  margin: "50px",
  padding: "20px",
};

export const SurveyResult = (props) => {
  var careers = props.careers;
  console.log(careers);
  return (
    <div>
      <h1>Based on your results, we recommend the following careers:</h1>
      <div className="SurveyResults" style={surveyResultsStyling}>
        {careers.map((career) => (
          <div className="SurveyResult" style={surveyResultStyling}>
            <h1>{career.title}</h1>
            <a href={`/careers/${career.name}`}>Go to career summary!</a>
          </div>
        ))}
      </div>
    </div>
  );
};
