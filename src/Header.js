import { Link, useLocation } from "react-router-dom";

import "./styles/Header.css";

const HeaderStyle = {
  color: "#2B430C",
  textDecoration: "none",
  fontSize: "40px",
};

const divs = {
  marginLeft: "20%",
  marginBottom: "40px",
  textDecoration: "none",
};

const Header = () => {
  const location = useLocation();

  return (
    <div className="Header" style={divs}>
      <Link to="/">
        <span style={HeaderStyle}>Home</span>
      </Link>
      <span style={HeaderStyle}>|</span>
      <Link to="/careers">
        <span style={HeaderStyle}>Career Explorer</span>
      </Link>
      <span style={HeaderStyle}>|</span>
      <Link to="/survey">
        <span style={HeaderStyle}>Career Survey</span>
      </Link>
    </div>
  );
};

export default Header;
