import { fireEvent, render, screen } from "@testing-library/react";

import App from "../App";
import "@testing-library/jest-dom";

describe("App", () => {
  test("Should update position and screen size values after changing inputs in the modal", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /Create User List/i }); // Adjust the name if needed
    fireEvent.click(button);

    const input1 = screen.getByLabelText(/X Position/i); // Adjust names as needed
    const input2 = screen.getByLabelText(/Y Position/i);
    const input3 = screen.getByLabelText(/Width/i);
    const input4 = screen.getByLabelText(/Height/i);

    const newValue1 = 123;
    const newValue2 = 456;
    const newValue3 = 789;
    const newValue4 = 111;

    fireEvent.change(input1, { target: { value: newValue1 } });
    fireEvent.change(input2, { target: { value: newValue2 } });
    fireEvent.change(input3, { target: { value: newValue3 } });
    fireEvent.change(input4, { target: { value: newValue4 } });

    const submitButton = screen.getByRole("button", { name: /Submit/i });
    fireEvent.click(submitButton);

    const displayedValue1 = screen.getByText(newValue1);
    const displayedValue2 = screen.getByText(newValue2);
    const displayedValue3 = screen.getByText(`${newValue3}px`);
    const displayedValue4 = screen.getByText(`${newValue4}px`);

    expect(displayedValue1).toBeInTheDocument();
    expect(displayedValue2).toBeInTheDocument();
    expect(displayedValue3).toBeInTheDocument();
    expect(displayedValue4).toBeInTheDocument();
  });

  test("Should display the appropriate usersInView after submitting the form", async () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /Create User List/i });
    fireEvent.click(button);

    const input1 = screen.getByLabelText(/X Position/i);
    const input2 = screen.getByLabelText(/Y Position/i);
    const input3 = screen.getByLabelText(/Width/i);
    const input4 = screen.getByLabelText(/Height/i);

    const newValue1 = 500;
    const newValue2 = 500;
    const newValue3 = 1270;
    const newValue4 = 900;

    fireEvent.change(input1, { target: { value: newValue1 } });
    fireEvent.change(input2, { target: { value: newValue2 } });
    fireEvent.change(input3, { target: { value: newValue3 } });
    fireEvent.change(input4, { target: { value: newValue4 } });

    const submitButton = screen.getByRole("button", { name: /Submit/i }); // Adjust the name if needed
    fireEvent.click(submitButton);

    const usernameLabel = screen.getByText("Username");
    const distanceLabel = screen.getByText("Distance (px)");
    const broadcasterLabel = screen.getByText("Broadcasting");

    const user2Distance = screen.getByText("707");
    const user3Distance = screen.getByText("316");
    const user2Name = screen.getByText("user2");
    const user3Name = screen.getByText("user3");

    expect(usernameLabel).toBeInTheDocument();
    expect(distanceLabel).toBeInTheDocument();
    expect(broadcasterLabel).toBeInTheDocument();

    expect(user2Distance).toBeInTheDocument();
    expect(user3Distance).toBeInTheDocument();
    expect(user2Name).toBeInTheDocument();
    expect(user3Name).toBeInTheDocument();
  });
});
