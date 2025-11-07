import { useContext } from "react";
import { Context } from "../context/context";

const useAppContext = () => {
    const { state, dispatch } = useContext(Context);
    return { state, dispatch };
};

export default useAppContext;
