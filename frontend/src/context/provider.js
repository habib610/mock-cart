import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import store from "./store";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, store);
    const value = {
        state,
        dispatch,
    };
    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
