import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      name: "Čupko",
      animal: "Cat",
      breed: "Maine coon",
    }),
    React.createElement(Pet, { name: "Pablo", animal: "Cat", breed: "Mixed" }),
    React.createElement(Pet, {
      name: "Oskar",
      animal: "Dog",
      breed: "Maltese",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
