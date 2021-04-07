import "./styles/Pages.css";
import * as React from "react";

export const SurveyResult = (props) => {
  return (
    <div className="SurveyResult">
      <h1>{props.career.title}</h1>
      <a href={`/careers/${props.career.name}`}>Go to career summary!</a>
    </div>
  );
};
