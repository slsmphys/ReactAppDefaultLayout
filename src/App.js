import React from "react";
import ReactDOM from "react-dom";

import "./index.css"; // Global CSS file

import DefaultLayout from "./components/DefaultLayout";

const getContentApp = <h2>INSERT APP HERE</h2>;

const App = () => <DefaultLayout title="Application Title" contentApp={getContentApp}/>;

ReactDOM.render(<App />, document.getElementById("root"));
