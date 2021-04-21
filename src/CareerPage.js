import "./styles/CareerPage.css";
import { careers_data } from "./data/careers_data";

const titleStyling = {
  fontFamily: "Lato",
  fontSize: "50px",
  color: "#000000",
  padding: "0px 50px 0px 10px",
};

const headerStyling = {
  fontFamily: "Lato",
  fontSize: "30px",
  color: "#293D20",
};

const headerStylingRed = {
  fontFamily: "Lato",
  fontSize: "30px",
  color: "red",
};

const wrapStyling = {
  backgroundColor: "#DCFBCE",
  padding: "50px 100px 100px 100px",
  marginTop: "30px",
  borderRadius: "10px",
};

const contentStyling = {
  fontFamily: "Nunito",
};

const Header = (props) => {
  const career = careers_data.careers.find((c) => c.name == props.career);

  return (
    <div className="CareerPage" style={wrapStyling}>
      <h1 style={titleStyling}>{career.title}</h1>
      <h4 class="custom">{career.description}</h4>

      <ul>
        <h3 style={headerStyling}>Benefits</h3>
        {career.benefits.map((l) => (
          <li style={contentStyling}>{l}</li>
        ))}
      </ul>

      <ul>
        <h3 style={headerStyling}>Drawbacks</h3>
        {career.drawbacks.map((l) => (
          <li style={contentStyling}>{l}</li>
        ))}
      </ul>

      <ul>
        <h3 style={headerStyling}>Requirements</h3>
        {career.reqs.map((l) => (
          <li style={contentStyling}>{l}</li>
        ))}
      </ul>

      <ul>
        <h3 style={headerStylingRed}>Warnings</h3>
        {career.warnings.map((l) => (
          <li style={contentStyling}>{l}</li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
