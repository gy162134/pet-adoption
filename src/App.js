import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store";

import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Navbar />
          {routes}
        </div>
      </HashRouter>
      // </Provider>
    );
  }
}

export default App;
