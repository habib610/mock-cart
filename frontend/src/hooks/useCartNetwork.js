import { useNavigate } from "react-router";
import { BASE_URL, LOGIN } from "../constant/routes";
import { RESET_LOADER, SET_LOADER, UPDATE_CART } from "../context/actions";
import useAppContext from "./useAppContext";
const useCartNetwork = () => {
    const { state, dispatch } = useAppContext();
    const navigate = useNavigate();
    const handleUpdateCart = async (productId, endpoint, method) => {
        try {
            if (!state.user) {
                navigate(LOGIN);

                return;
            }
            dispatch({ type: SET_LOADER });

            const body = {
                productId,
                userId: state.user?._id,
            };

            const res = await fetch(`${BASE_URL}${endpoint}`, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Failed to add to cart");
            }

            const data = await res.json();
            dispatch({ type: UPDATE_CART, payload: data });
        } catch (error) {
            alert(error.message || "Something went wrong!");
        } finally {
            dispatch({ type: RESET_LOADER });
        }
    };
    return { handleUpdateCart };
};

export default useCartNetwork;
