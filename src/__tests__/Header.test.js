const { render, screen, fireEvent } = require("@testing-library/react");
const { default: Header } = require("../components/Header");
const { Provider } = require("react-redux");
import { BrowserRouter } from "react-router-dom";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";

it("Should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const login = screen.getByRole("button", { name: "Login" });
  //   const login = screen.getByText("Login")
  expect(login).toBeInTheDocument();
});

it("Should render Header component with cart items [0]", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/)
  expect(cartItems).toBeInTheDocument()
});

it("Should change Login to Logout buton in Header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginbutton = screen.getByRole("button", {name : "Login"})

    fireEvent.click(loginbutton)

    const logoutbutton = screen.getByRole("button", {name : "LogOut"})

    expect(logoutbutton).toBeInTheDocument();
  });