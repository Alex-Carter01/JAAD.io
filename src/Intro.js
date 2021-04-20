import "./styles/Pages.css";
import logoT from "./logoTransparent.png";
import { Button } from "@material-ui/core";

const welcomeStyle = {
  fontSize: "89px",
  padding: "50px 950px 200px 0px",
  fontColor: "#000000",
  fontFamily: "Lato",
};

const imgStyle = {
  justifyContent: "flex-end",
  alignSelf: "flex-end",
  width: "300px",
  height: "240px",
  marginLeft: "1500px",
  marginBottom: "25px",
};

const wrapStyle = {
  backgroundColor: "#FFFFFF",
  marginTop: "100px",
  marginLeft: "100px",
  marginRight: "100px",
  marginBottom: "100px",
  padding: "5px 0px 0px 30px",
};

const buttonStyle = {
  backgroundColor: "#293D20",
  padding: "20px 50px 20px 50px",
  fontFamily: "Lato",
  fontSize: "22px",
};

const Intro = () => {
  return (
    <div style={wrapStyle}>
      <div style={welcomeStyle}>
        {" "}
        Let's put together a plan that works for you!
      </div>
      <Button style={buttonStyle} variant="contained" href="/survey">
        Lets Get Started
      </Button>
      <img style={imgStyle} src={logoT} alt="LogoT" />
    </div>
  );
};

export default Intro;
