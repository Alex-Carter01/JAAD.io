import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import "./styles/App.css";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Survey from "./Survey";
import Careers from "./Careers";
import React from 'react';

const homeStyle ={
  backgroundColor: "#D1EBB2"
}
const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <Header style={homeStyle} />
      {location.pathname == "/" && <Home />}
      {location.pathname == "/careers" && <Careers />}
      {location.pathname == "/survey" && <Survey />}
      <Footer />
    </div>
  );
};

export default App;

