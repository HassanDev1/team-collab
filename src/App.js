import React from "react";
import "./App.css";
import logo from "./img/logo.png";
import Quote from "./components/quote";
import LandingPage from "./components/landingpage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4 className="name">collab.com</h4>
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Team Work</h1>
      </header>
      <Quote />
      <LandingPage />
    </div>
  );
}

export default App;
