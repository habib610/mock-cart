import { RESET_LOADER, SET_LOADER, USER_LOGIN, USER_LOGOUT } from "./actions";

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
        default:
            return state;
    }
};
