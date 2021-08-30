import React, { Component } from "react";
import Nav from "./Nav/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Hero />
        <Main />
      </div>
    </Router>
  );
}

export default App;
