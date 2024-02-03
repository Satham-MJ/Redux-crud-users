import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./Create";
import Update from "./Update";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/create" Component={Create} />
        <Route path="/edit/:id" Component={Update} />
      </Routes>
    </Router>
  );
};

export default App;
