import { BsCart } from "react-icons/bs";
import { Link } from "react-router";
import { CART, HOME } from "../../constant/routes";

const Navbar = () => {
    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-md ">
            <div className="app-container mx-auto flex justify-between items-center px-6 py-1 md:py-2 relative">
                <Link to={HOME} className="font-bold text-2xl lg:text-3xl">
                    Mock <span className="text-purple-500">Cart</span>
                </Link>

                <nav className="hidden md:flex items-center space-x-8">
                    <Link
                        to={CART}
                        className="text-black hover:text-purple-600 flex items-center gap-1"
                    >
                        <span className="absolute top-1 rounded-full right-1 min-w-5 h-5 flex items-center justify-center bg-rose-500 text-white text-sm p-0.5">
                            0
                        </span>
                        Cart <BsCart className="text-purple-600" />
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
