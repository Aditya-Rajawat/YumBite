const { render, screen } = require("@testing-library/react");
import { BrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/mockResListData.json";

global.fetch = jest.fn(() => {
  return Promise.resolve(() => {
    json: () => {
      return Promise.resolve(MOCK_DATA);
    };
  });
});

it("Should render the body component with search", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchbtn = screen.getByRole("button", {name : "Search"})
  expect(searchbtn).toBeInTheDocument();
});
