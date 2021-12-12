import React from "react";

import DogsCard from "../Menu/DogsCard";
import SidesCards from "./SidesCards";

import { dogs, sides } from "../../helpers/objects/objFiles";

function Menu() {
  return (
    <div>
      <h2>My Dawgs</h2>
      <div className="row">
        {dogs.map((dog) => {
          return <DogsCard key={dog.id} dogs={dog} />;
        })}
      </div>
      <h2>My Sides</h2>
      <div className="row">
        {sides.map((side) => {
          return <SidesCards key={side.id} sides={side} />;
        })}
      </div>
    </div>
  );
}

export default Menu;
