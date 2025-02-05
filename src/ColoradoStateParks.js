import React from "react";
import howManyParks from "./parks/howManyParks";
import { trees, wildlife } from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  console.log(trees); // => "Aspen and Pine"
  wildlife(); // => "Elk, Bighorn Sheep, Moose"

  return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks;
