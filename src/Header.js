import { Link, useLocation } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./styles/Header.css";

const HeaderStyle = {
  color: "#4D942C",
  fontSize: "20px",
  fontFamily: "Arial",
  fontWeight: "bold",
  backgroundColor: "#C9C9C9",
  borderStyle: "solid",
  borderColor: "#C9C9C9",
  marginTop: "100px",
  padding: "25px 50px 25px 50px",
  textAlign: "center",
};

const divs = {
  textDecoration: "none",
  textAlign: "center",
  marginTop: "100px",
  margin: "auto",
};

const buttonStyle = {
  backgroundColor: "#C9C9C9",
  color: "#293D20",
  padding: "10px 50px 10px 50px",
  fontFamily: "Lato",
  fontSize: "22px",
};

const Header = () => {
  const location = useLocation();

  return (
    <div className="Header" style={divs}>
      <Link to="/intro">
        <span style={HeaderStyle}>
          {" "}
          <Button style={buttonStyle}> Home </Button>{" "}
        </span>
      </Link>
      <span style={HeaderStyle}>|</span>
      <Link to="/careers">
        <span style={HeaderStyle}>
          {" "}
          <Button style={buttonStyle}> Career Explorer </Button>{" "}
        </span>
      </Link>
      <span style={HeaderStyle}>|</span>
      <Link to="/">
        <span style={HeaderStyle}>
          {" "}
          <Button style={buttonStyle}> About Us </Button>{" "}
        </span>
      </Link>
      <span style={HeaderStyle}>|</span>
      <Link to="/survey">
        <span style={HeaderStyle}>
          {" "}
          <Button style={buttonStyle}> Career Survey </Button>{" "}
        </span>
      </Link>
    </div>
  );
};

export default Header;
