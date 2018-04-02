import React from "react";
import ReactDOM from "react-dom";
import AppRouter from './routers/AppRouter';

function run() {
  ReactDOM.render(<AppRouter />, document.getElementById("root"));
}

if (window.addEventListener) {
  window.addEventListener("DOMContentLoaded", run);
} else {
  window.attachEvent("onload", run);
}
