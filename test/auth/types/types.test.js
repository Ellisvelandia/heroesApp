import { types } from "../../../src/auth/types/types";

describe("test types", () => {
  test("should return thats types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
