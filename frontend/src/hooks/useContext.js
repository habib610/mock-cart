import { Context } from "../context/provider";

const useContext = () => {
    const { state, dispatch } = useContext(Context);
    return { state, dispatch };
};

export default useContext;
