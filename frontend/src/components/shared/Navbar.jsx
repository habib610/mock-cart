import { AiOutlineLogout } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router";
import { CART, HOME, LOGIN } from "../../constant/routes";
import { USER_LOGOUT } from "../../context/actions";
import useAppContext from "../../hooks/useAppContext";
import { cn } from "../../lib/cn";

const Navbar = () => {
    const { state, dispatch } = useAppContext();
    const handleLogout = () => {
        dispatch({ type: USER_LOGOUT });
    };
    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-md ">
            <div className="app-container mx-auto flex justify-between items-center px-6 py-1 md:py-2 relative">
                <Link
                    to={HOME}
                    className="font-bold text-xl sm:text-2xl lg:text-3xl"
                >
                    Mock <span className="text-purple-500">Cart</span>
                </Link>

                <nav className="flex items-center space-x-8">
                    <Link
                        to={CART}
                        className="text-black hover:text-purple-600 flex items-center gap-1 relative"
                    >
                        {state?.user && (
                            <span
                                className={cn(
                                    "absolute -top-1 rounded-full -right-5 min-w-5 h-5 flex items-center justify-center bg-rose-500 text-white text-sm p-0.5",
                                    {
                                        "w-0 h-0 overflow-hidden":
                                            !state?.user?.cart?.length,
                                    }
                                )}
                            >
                                {state?.user?.cart?.length}
                            </span>
                        )}
                        <span className="hidden md:block">Cart</span>
                        <BsCart className="text-purple-600" />
                    </Link>

                    {state?.user ? (
                        <div className="flex items-center gap-1">
                            <div className="bg-amber-500 text-white w-6 h-6 md:w-8 md:h-8 font-bold rounded-full flex items-center justify-center">
                                {state?.user?.name.charAt(0)}
                            </div>
                            |
                            <button
                                className="hover:text-rose-500 cursor-pointer"
                                onClick={handleLogout}
                            >
                                <span className="md:hidden">
                                    <AiOutlineLogout />
                                </span>{" "}
                                <span className="hidden md:block">Logout</span>
                            </button>
                        </div>
                    ) : (
                        <Link
                            to={LOGIN}
                            className="text-black hover:text-purple-600 flex items-center gap-1"
                        >
                            Login
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
