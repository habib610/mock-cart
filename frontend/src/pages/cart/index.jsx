import { useEffect } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/ui/Button";
import { LOGIN } from "../../constant/routes";
import useAppContext from "../../hooks/useAppContext";
import CartCard from "./CartCard";

const Cart = () => {
    const { state } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!state.user) {
            navigate(LOGIN);
        }
    }, [navigate, state.user]);

    const cartPrice = state?.user?.cartTotal;
    return (
        <section className="app-top-space">
            <div className="app-container">
                <div className="flex justify-between lg:justify-around gap-4 flex-wrap">
                    <div className="w-full md:w-6/12 lg:w-7/12  xl:w-6/12 ">
                        {state.user?.cart?.length &&
                            state.user?.cart.map((item) => (
                                <CartCard key={item.productId} cart={item} />
                            ))}
                    </div>

                    <div className="w-full md:w-5/12 lg:w-4/12 xl:w-4/12  ">
                        <h1 className="text-2xl mb-6">Product details</h1>
                        <div className="bg-gray-100 p-4 flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <p className="text-sm">Total Price</p>
                                <p className="text-sm font-bold">
                                    ${cartPrice}
                                </p>
                            </div>{" "}
                            <div className="flex justify-between items-center">
                                <p className="text-sm">Delivery Charge</p>
                                <p className="text-sm font-bold text-green-600">
                                    FREE
                                </p>
                            </div>
                            <hr className=" border-gray-300 " />
                            <div className="flex justify-between items-center">
                                <p className="text-xl">Total Amount</p>
                                <p className="text-xl font-bold">
                                    ${cartPrice}
                                </p>
                            </div>
                            <Button>Checkout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
