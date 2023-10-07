import React, { Fragment, StrictMode } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <StrictMode>
      <Fragment>
        <Header />
        <Meals />
      </Fragment>
    </StrictMode>
  );
}

export default App;
