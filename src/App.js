import React from "react";
import { Router } from "@reach/router";
import Details from "./Details";
import { Provider } from "react-redux";
import SearchParams from "./SearchParams";
import NavaBar from "./NavBar";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <NavaBar />
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
