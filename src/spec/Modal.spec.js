import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../components/App";
import ReactDOM from "react";

describe('Popover', () => {

  document.body.innerHTML = "<div id='portal'></div>";

  test("Video list adds up 10 items after a scroll event", () => {

    render (
      <Router>
        <App />
      </Router>
    )
  })
})
