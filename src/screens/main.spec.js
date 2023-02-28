import React from "react";
import { render } from "@testing-library/react-native";
import Main from "./main";

test("hiya renders", () => {
  const screen = render(<Main />);
  expect(screen.getAllByText("hiya")).toHaveLength(1);
});
