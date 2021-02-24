import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "./features/store";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>React App</title>
        <meta
          name="description"
          content="a simple pokédex for your pokemon needs."
        />
      </Helmet>
      <Provider store={store}>
        <App />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
