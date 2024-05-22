import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Header contains correct text", () => {
    render(<App />);
    const text = screen.getByText("Hello React!");
    expect(text).toBeDefined()
  });