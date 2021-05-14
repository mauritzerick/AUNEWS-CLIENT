import React from "react";
import Homepage from "./Homepage.js";
import axios from "axios";

function App() {
  return (
    <div className="Home">
      <Homepage />
      <Navigation1 />
      <Navigation2 />

      <Switch>
        <Route exact path="/general">
          <General />
        </Route>

        <Route exact path="/business">
          <Buniness />
        </Route>

        <Route exact path="/sports">
          <Sports />
        </Route>

        <Route exact path="/entertainment">
          <Entertainment />
        </Route>

        <Route exact path="/weather">
          <Weather />
        </Route>

        <Route exact path="/science">
          <Science />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
