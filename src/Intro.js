import "./styles/Pages.css";
import logoT from "./logoTransparent.png";
import { Button } from "@material-ui/core";

const welcomeStyle = {
  fontSize: "89px",
  padding: "50px 250px 50px 250px",
  fontColor: "#000000",
  fontFamily: "Lato",
};

const imgStyle = {
  justifyContent: "flex-end",
  alignSelf: "flex-end",
  width: "300px",
  height: "240px",
  marginLeft: "0px",
  marginBottom: "25px",
};

const wrapStyle = {
  backgroundColor: "#DCFBCE",
  marginTop: "100px",
  marginLeft: "100px",
  marginRight: "100px",
  marginBottom: "100px",
  padding: "5px 0px 0px 30px",
};

const buttonWrapStyle = {
  width: "100%",
  textAlign: "center",
};

const buttonStyle = {
  backgroundColor: "#293D20",
  color: "white",
  padding: "20px 50px 20px 50px",
  fontFamily: "Lato",
  fontSize: "22px",
  marginLeft: "auto",
};

const Intro = () => {
  return (
    <div style={wrapStyle}>
      <div style={welcomeStyle}>
        {" "}
        Let's put together a plan that works for you!
        <br />
        <br />
        <div style={buttonWrapStyle}>
          <Button style={buttonStyle} variant="contained" href="/survey">
            Lets Get Started
          </Button>
        </div>
        <br />
        <img style={imgStyle} src={logoT} alt="LogoT" />{" "}
      </div>
    </div>
  );
};

export default Intro;
