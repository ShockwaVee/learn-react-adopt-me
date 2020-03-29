import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Čupko" animal="Cat" breed="Maine coon" />
      <Pet name="Pablo" animal="Cat" breed="Mixed" />
      <Pet name="Oskar" animal="Dog" breed="Maltese" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
