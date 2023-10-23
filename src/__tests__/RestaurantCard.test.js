const { render, screen } = require("@testing-library/react")
import RestaurantCard, { WithPromotedLabel } from "../components/RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("Should render Restaurant Card component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />)

    const resName = screen.getByText("Mittal Foods")
    expect(resName).toBeInTheDocument();
})

// it("Should render WithPromoted Label component", () => {
//     render(WithPromotedLabel(<RestaurantCard resD />))
// })