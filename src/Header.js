import { Link, useLocation } from "react-router-dom";

import "./styles/Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <div className="Header">
        <Link to="/">Home</Link> |
        <Link to="/careers">Career Explorer</Link> |
        <Link to="/survey">Career Survey</Link>
    </div>
  );
};

export default Header;
