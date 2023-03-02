import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import AppRouter from "../../src/router/AppRouter";

describe("test AppRouter", () => {
  test("should show login if not auth", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText("Login").length).toBe(2);
  });

  test("should show login if not auth", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "ABC",
        name: "Ellis",
      },
    };
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);
  });
});
