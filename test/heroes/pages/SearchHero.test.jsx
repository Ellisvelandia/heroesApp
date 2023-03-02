import { MemoryRouter, useNavigate } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchHero from "../../../src/heroes/pages/SearchHero";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Test searchHero", () => {
  beforeEach(() => jest.clearAllMocks());
  test("should be show succesly for defect", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchHero />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test("should be show batman", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchHero />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("batman");

    const img = screen.getByRole("img");
    expect(img.src).toContain("/heroes/dc-batman.jpg");
  });

  test("should shor error if not found hero batman123", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <SearchHero />
      </MemoryRouter>
    );
    const alert = screen.getByLabelText("alert-danger");
    expect(alert.style.display).toBe("");
  });

  test("should call on event", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchHero />
      </MemoryRouter>
    );
    const input = screen.getByRole("textbox");
    fireEvent.change(input, {
      target: { name: "searchText", value: "superman" },
    });

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(mockedUseNavigate).toHaveBeenCalledWith("?q=superman");
  });
});
