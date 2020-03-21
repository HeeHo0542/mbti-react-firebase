import * as React from "react";
import "../styles/pages/Home.css";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/test");
  };
  return (
    <div className="Home">
      <div className="Home-content"></div>
      <img src="/assets/roof.svg" alt="roof"></img>
      <h1>“To finally be understood.”</h1>
      <button onClick={handleClick}>Start Test</button>
      <img src="/assets/bar.svg" alt="bar"></img>
      <h4>“To finally be understood.”</h4>
    </div>
  );
};

export default Home;
