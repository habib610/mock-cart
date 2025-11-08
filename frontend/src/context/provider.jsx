import { useReducer } from "react";
import { Context } from "./context";
import { reducer } from "./reducer";
import store from "./store";

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, store);
    const value = {
        state,
        dispatch,
    };
    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
