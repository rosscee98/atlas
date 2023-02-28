import React from "react";
import { render } from "@testing-library/react-native";
import Main from "./main";

test("hiya renders", () => {
  const screen = render(<Main />);
  expect(screen.getAllByText("hiya")).toHaveLength(1);
});

test("add button renders", () => {
  const screen = render(<Main />);
  expect(screen.getAllByRole("button", { name: /New/i })).toHaveLength(1);
});
