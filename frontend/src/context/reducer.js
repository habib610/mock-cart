import {
    PAYMENT_CHECKOUT,
    RESET_LOADER,
    SET_LOADER,
    UPDATE_CART,
    USER_LOGIN,
    USER_LOGOUT,
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return { ...state, user: action.payload };
        case USER_LOGOUT:
            return { ...state, user: null };

        case SET_LOADER:
            return { ...state, loading: true };
        case RESET_LOADER:
            return { ...state, loading: false };
        case UPDATE_CART:
            return { ...state, user: action.payload };

        case PAYMENT_CHECKOUT:
            return { ...state, user: action.payload };
        default:
            return state;
    }
};
