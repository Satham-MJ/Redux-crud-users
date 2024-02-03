import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import UserReducer from "./UserReducer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    users: UserReducer,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
