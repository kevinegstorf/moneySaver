import React from "react";
import Login from "./index";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";

// Mock useHistory
const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("login", () => {
  afterEach(cleanup);
  it("can fill in email an password", () => {
    // Arrange

    const emailText = "test@test.com";
    const passwordText = "password123";
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const emailInput = getByLabelText("Email Address");
    const passwordInput = getByLabelText("Password");
    const button = getByText("Login");

    // Act
    fireEvent.change(emailInput, { target: { value: emailText } });
    fireEvent.change(passwordInput, { target: { value: passwordText } });
    fireEvent.click(button);

    // Assert
    expect(emailInput.value).toBe(emailText);
    expect(passwordInput.value).toBe(passwordText);
    expect(mockHistoryPush).toHaveBeenCalledWith("/home");
  });

  test("snapshot", () => {
    const { container } = render(<Login />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
