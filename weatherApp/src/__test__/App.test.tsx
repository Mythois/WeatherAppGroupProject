import {render, screen} from "@testing-library/react"
import App from "../App"


it("should have the title WebDevWeather", () =>{
    render(<App/>);
    const message = screen.queryByText(/WebDevHeader/i);
    expect(message).toBeVisible()
})