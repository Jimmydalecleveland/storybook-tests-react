import { Primary, Secondary, CustomColor } from "./Button.stories";
import { render, screen } from "@testing-library/react";

test("should render primary button", () => {
  render(<Primary {...Primary.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(/button/i);
});

test("should render secondary button", () => {
  render(<Secondary {...Secondary.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(/button/i);
});

test("should render a custom color", () => {
  render(<CustomColor {...CustomColor.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(/custom color/i);
  expect(screen.getByRole("button")).toHaveStyle(
    `background-color: ${CustomColor.args.backgroundColor}`
  );
});
