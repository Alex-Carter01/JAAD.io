import "./styles/Pages.css";
import * as React from "react";

export const SurveyResult = (props) => {
  var careers = props.careers;
  console.log(careers);
  return (
    <div>
    {careers.map(career => (
      <div className="SurveyResult">
        <h1>{career.title}</h1>
        <a href={`/careers/${career.name}`}>Go to career summary!</a>
      </div>
      ))}
    </div>
  );
};
