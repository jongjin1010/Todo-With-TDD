import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import exp from "constants";

describe("App", () => {
  it("render tasks", () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent("아무 일도 하기 싫다");
  });
});
