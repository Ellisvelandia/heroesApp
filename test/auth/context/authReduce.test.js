import { authReducer } from "../../../src/auth/context/authReduce";
import { types } from "../../../src/auth/types/types";

describe("Test authReduce", () => {
  test("should be call login auth and stablish user", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("should ", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Ellis",
        id: "123",
      },
    };

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("should first", () => {
    const state = {
      logged: true,
      user: { id: "123", name: "Ellis" },
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({ logged: false });
  });
});
