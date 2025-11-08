export const emailRegEx =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const validateLogin = (data) => {
    const errors = {};

    if (!data.email.trim()) {
        errors.email = "Email is required";
    } else if (!emailRegEx.test(data.email)) {
        errors.email = "Invalid email format";
    }

    if (!data.password) {
        errors.password = "Password is required";
    } else if (data.password.length < 5) {
        errors.password = "Password must be at least 6 characters";
    }
    return errors;
};

export const validateCheckoutForm = (data) => {
    const errors = {};

    if (!data.email.trim()) {
        errors.email = "Email is required";
    } else if (!emailRegEx.test(data.email)) {
        errors.email = "Invalid email format";
    }

    if (!data.name) {
        errors.name = "Name is required";
    }
    return errors;
};
