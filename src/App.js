import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>“It’s so incredible to finally be understood.”</h1>
        <p>
          Take our Personality Test and get a “freakishly accurate” description
          of who you are and why you do things the way you do.
        </p>
        <a
          className="App-link"
          href="https://www.16personalities.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          16personalities
        </a>
      </header>
    </div>
  );
}

export default App;
