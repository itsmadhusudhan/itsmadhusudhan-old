import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

function run() {
  ReactDOM.render(<Layout />, document.getElementById("root"));
}

if (window.addEventListener) {
  window.addEventListener("DOMContentLoaded", run);
} else {
  window.attachEvent("onload", run);
}
