const { screen, render } = require("@testing-library/react");
const { default: Contact } = require("../components/Contact");
import "@testing-library/jest-dom";

describe("Contact Us Page test cases", () => {
  test("Should load heading inside contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

//   it and test are same thing
  it("Should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load input inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 inputs inside contact component", () => {
    render(<Contact />);

    const inputboxes = screen.getAllByRole("textbox");
    expect(inputboxes.length).toBe(2);
  });
});
