import { Link, useLocation } from "react-router-dom";

import "./styles/Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <div className="Header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/careers">Career Explorer</Link>
        </li>
        <li>
          <Link to="/survey">Career Survey</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
