import React from "react";
import Menu from "../Menu/Menu";

import { restaurant, greetings } from "../../helpers/objects/objFiles";

import "./home.css";

function Home() {
  const greet = () => {
    const getGreets = greetings[Math.floor(Math.random() * greetings.length)];
    return getGreets;
  };

  return (
    <div className="home-board">
      <div className="title-greeting">
        <h2 className="rest-title">{restaurant.name}</h2>
        <h5>{greet()}</h5>
      </div>
      <div className="hours-panel">
        <h5>{restaurant.hours}</h5>
      </div>
      <div className="container-fluid card-border">
        <Menu />
      </div>
    </div>
  );
}

export default Home;
