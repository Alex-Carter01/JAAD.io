import "./styles/Pages.css";
import * as React from 'react';
import {Button} from 'baseui/button';

const SurveyStyle ={
  textAlign: "left",
  marginLeft:"40%",
  color:"black",
  fontSize:"120%"
}
const Survey = () => {
  return (
    <div className="Survey" style={SurveyStyle}>
        <p>Are you able to perform physical activity?</p>
        <input type="radio" id="yes" name="q1" value="yes"/>Yes
        <br/>
        <input type="radio" id="no" name="q1" value="no"/>No
        <br/><br/>
        <p>Do you enjoy working with animals?</p>
        <input type="radio" id="yes" name="q2" value="yes"/>Yes
        <br/>
        <input type="radio" id="no" name="q2" value="no"/>No
        <br/><br/>
        <p>Do you enjoy a structured workplace?</p>
        <input type="radio" id="yes" name="q3" value="yes"/>Yes
        <br/>
        <input type="radio" id="no" name="q3" value="no"/>No
        <br/><br/>
        <Button onClick={() => alert('check back later 🙂')}>Show My Results</Button>
    </div>
  );
};

export default Survey;
