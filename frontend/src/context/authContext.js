import { useNavigate } from "react-router-dom";
import { useReducer, createContext, useEffect } from "react";

const initialState = {
  user: localStorage.getItem("user")
    ? localStorage.getItem("user") !== "undefined" &&
      JSON.parse(localStorage.getItem("user"))
    : null,
  role: localStorage.getItem("role") || null,
  token: localStorage.getItem("token") || null,
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        user: null,
        role: null,
        token: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        role: action.payload.role,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        role: null,
        token: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("role", state.role);
    localStorage.setItem("token", state.token);
  }, [state]);

  const logout = () => {
    // Clear localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    localStorage.removeItem("token");

    // Clear state
    dispatch({ type: "LOGOUT" });

    // Redirect to home page
    navigate("/home");
    // Dispatch logout action
    dispatch({ type: "LOGOUT" });
  };

  return (
    <authContext.Provider
      value={{
        user: state.user,
        role: state.role,
        token: state.token,
        dispatch,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
