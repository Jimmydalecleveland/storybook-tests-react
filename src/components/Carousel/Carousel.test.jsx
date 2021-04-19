import { Default } from "./Carousel.stories";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("should render", () => {
  const { container } = render(<Default {...Default.args} />);
  expect(container.firstChild).toMatchSnapshot();
});

test("should switch slides when clicked", () => {
  render(<Default {...Default.args} />);
  const carouselContainer = screen.getByTestId("carousel-container");

  // Grab all slides, as they are always in the DOM
  const firstSlide = screen.getByText(/swashbuckling/i);
  const secondSlide = screen.getByText(/with/i);
  const thirdSlide = screen.getByText(/code/i);

  // First slide is visible by default
  expect(firstSlide).toBeVisible();
  expect(secondSlide).not.toBeVisible();
  expect(thirdSlide).not.toBeVisible();

  // After clicking once, only the Second slide is visible
  userEvent.click(carouselContainer);
  expect(firstSlide).not.toBeVisible();
  expect(secondSlide).toBeVisible();
  expect(thirdSlide).not.toBeVisible();
});
