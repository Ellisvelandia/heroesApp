import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PrivateRouter } from "../../src/router/PrivateRouter";
import { MemoryRouter, Routes, Route } from "react-router-dom";

describe("test publicRoute", () => {
  test("should ", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PrivateRouter>
          <h1>Ruta privada</h1>
        </PrivateRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta privada")).toBeTruthy();
  });
  test("should ", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Ellis",
        id: "ABC",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="/login"
              element={
                <PrivateRouter>
                  <h1>Ruta privada</h1>
                </PrivateRouter>
              }
            />
            <Route path="marvel" element={<h1>Pagina Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Pagina Marvel")).toBeTruthy();
  });
});
