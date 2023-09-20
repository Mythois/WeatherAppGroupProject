import {render, screen} from "@testing-library/react"
import Navbar from "../components/Navbar/Navbar";



it("should have the title WebDevWeather", () =>{
    render(<Navbar/>);
    const message = screen.queryByText(/WebDevWeather/i);
    expect(message).toBeVisible()
})