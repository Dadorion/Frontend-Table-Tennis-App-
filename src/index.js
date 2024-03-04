import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import store from "./redux/redux-store";
import "../src/assets/fonts/Roboto/Roboto-Regular.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <App state={store.getState()}/> */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
