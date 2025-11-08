import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { BASE_URL, HOME } from "../../constant/routes";
import { RESET_LOADER, SET_LOADER, USER_LOGIN } from "../../context/actions";
import useAppContext from "../../hooks/useAppContext";
import { validateLogin } from "../../utils/validator";

const Login = () => {
    let navigate = useNavigate();

    const { dispatch } = useAppContext();
    const [errors, setErrors] = useState({});
    const [loginError, setLoginError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginError("");

        const formData = new FormData(e.currentTarget);
        try {
            const data = {
                email: formData.get("email"),
                password: formData.get("password"),
            };

            const validationErrors = validateLogin(data);
            setErrors(validationErrors);

            if (Object.keys(validationErrors).length === 0) {
                dispatch({ type: SET_LOADER });

                let res = await fetch(`${BASE_URL}/user/login`, {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!res.ok) {
                    let data = await res.json();
                    setLoginError(data?.message || "Something went wrong");
                } else {
                    let loginData = await res.json();
                    dispatch({ type: USER_LOGIN, payload: loginData });
                    navigate(HOME);
                }
                dispatch({ type: RESET_LOADER });
            }
        } catch (error) {
            dispatch({ type: RESET_LOADER });
            setLoginError(
                error instanceof Error ? error.message : "Something went wrong"
            );
        }
    };
    return (
        <div className=" ">
            <div className="app-container flex justify-center items-center min-h-screen">
                <div className="w-full md:w-[500px] p-4 py-6 rounded-2xl shadow-sm border border-gray-200 ">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-8"
                        action=""
                    >
                        <h2 className="text-center mb-2 text-2xl">Login</h2>

                        <Input
                            placeholder="email"
                            name="email"
                            id="email"
                            type="text"
                            label="Email"
                            error={errors.email}
                        />
                        <Input
                            label="Password"
                            placeholder="password"
                            name="password"
                            id="password"
                            type="password"
                            error={errors.password}
                        />
                        <Button type="submit">Submit</Button>

                        {loginError && (
                            <div className="mt-1 text-red-500">
                                {loginError}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Login;
