import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles/App.css";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Survey from "./Survey";
import Careers from "./Careers";
import CareerPage from "./CareerPage";
import React from "react";

const homeStyle = {
  backgroundColor: "#D1EBB2",
};
const App = () => {
  const location = useLocation();
  const path = location.pathname.split("/");
  return (
    <div className="App">
      <Header style={homeStyle} />
      {path[path.length - 1] == "" && <Home />}
      {path[path.length - 1] == "careers" && <Careers />}
      {path[path.length - 2] == "careers" &&
        path[path.length - 1].length >= 1 && (
          <CareerPage career={path[path.length - 1]} />
        )}
      {path[path.length - 1] == "survey" && <Survey />}
      <Footer />
    </div>
  );
};

export default App;
