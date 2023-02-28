import React from "react";
import { render } from "@testing-library/react-native";
import List from "./list";

test("hiya renders", () => {
  const screen = render(<List />);
  expect(screen.getByText("hiya")).toBeVisible();
});

test("add button renders", () => {
  const screen = render(<List />);
  const addButton = screen.getByRole("button", { name: /New/i });
  expect(addButton).toBeVisible();
});
