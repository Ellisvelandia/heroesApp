import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRouter } from "../../src/router/PublicRouter";
import { MemoryRouter, Routes, Route } from "react-router-dom";

describe("test publicRoute", () => {
  test("should ", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRouter>
          <h1>Ruta publica</h1>
        </PublicRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta publica")).toBeTruthy();
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
                <PublicRouter>
                  <h1>Ruta publica</h1>
                </PublicRouter>
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
