import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const initialUserValue = () => {
  const item = localStorage.getItem("OLSOFTWARELOGIN");
  if (item) {
    return JSON.parse(atob(item));
  }

  return {};
};

const initialState = {
  user: initialUserValue(),
  myAlert: null,
};

const useAppContext = () => {
  return useContext(AppContext);
};

const reducer = (state, action) => {
  console.log(action);
  console.log(state);
  if (action.type === "LOGIN") {
    return {
      ...state,
      user: action.value,
    };
  }
  if (action.type === "ALERT") {
    return {
      ...state,
      myAlert: action.value,
    };
  }
  return state;
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{ user: state.user, myAlert: state.myAlert, dispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { Provider, useAppContext };
