import { render } from "@testing-library/react-native";
import NewEntry from "./new-entry";

test("New Entry screen label renders", () => {
  const screen = render(<NewEntry />);
  expect(screen.getByText("New Entry screen")).toBeVisible();
});
