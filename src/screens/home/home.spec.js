import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HomeScreen from "./home";

test("List view renders initially", () => {
  const screen = render(<HomeScreen />);
  const initialHeaderText = screen.getByText("hiya");

  expect(initialHeaderText).toBeVisible();
});

test("New Entry view stacks on button click", () => {
  const screen = render(<HomeScreen />);
  const addButton = screen.getByRole("button", { label: /New/i });

  fireEvent(addButton, "press");

  const newHeaderText = screen.getByText("New Entry screen");

  expect(newHeaderText).toBeVisible();
});
