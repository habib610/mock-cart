import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Modal from "../../components/ui/Modal";
import { BASE_URL, HOME, LOGIN } from "../../constant/routes";
import {
    PAYMENT_CHECKOUT,
    RESET_LOADER,
    SET_LOADER,
} from "../../context/actions";
import useAppContext from "../../hooks/useAppContext";
import { validateCheckoutForm } from "../../utils/validator";
import CartCard from "./CartCard";

const Cart = () => {
    const { state, dispatch } = useAppContext();
    const navigate = useNavigate();
    const [showCheckout, setShowCheckout] = useState(false);
    const [errors, setErrors] = useState({});
    const [invoice, setInvoice] = useState(null);

    useEffect(() => {
        if (!state.user) {
            navigate(LOGIN);
        }
    }, [navigate, state.user]);

    const cartPrice = state?.user?.cartTotal;

    const handleCheckout = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        try {
            const data = {
                email: formData.get("email"),
                name: formData.get("name"),
                userId: state.user?._id,
            };

            const validationErrors = validateCheckoutForm(data);
            setErrors(validationErrors);

            if (Object.keys(validationErrors).length === 0) {
                dispatch({ type: SET_LOADER });

                let res = await fetch(`${BASE_URL}/user/checkout`, {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!res.ok) {
                    const errorData = await res.json();
                    throw new Error(
                        errorData.message || "Failed to add to cart"
                    );
                } else {
                    let data = await res.json();
                    dispatch({ type: PAYMENT_CHECKOUT, payload: data?.user });
                    setInvoice({
                        invoiceAmount: data?.invoiceAmount,
                        invoiceCart: data?.invoiceCart,
                    });
                }
                dispatch({ type: RESET_LOADER });
            }
        } catch (error) {
            dispatch({ type: RESET_LOADER });
            alert(error.message || "Something went wrong");
        }
    };

    const handleShopAgain = () => {
        setShowCheckout(false);
        setInvoice(null);
        navigate(HOME);
    };
    return (
        <>
            <section className="app-top-space">
                <div className="app-container">
                    <div className="flex justify-between lg:justify-around gap-4 flex-wrap">
                        <div className="w-full md:w-6/12 lg:w-7/12  xl:w-6/12 ">
                            {state.user?.cart?.length ? (
                                state.user?.cart.map((item) => (
                                    <CartCard
                                        key={item.productId}
                                        cart={item}
                                    />
                                ))
                            ) : (
                                <h1 className="text-2xl lg:text-3xl">
                                    Your cart is empty
                                </h1>
                            )}
                        </div>

                        {state?.user?.cart.length !== 0 && (
                            <div className="w-full md:w-5/12 lg:w-4/12 xl:w-4/12  ">
                                <h1 className="text-2xl mb-6">
                                    Product details
                                </h1>
                                <div className="bg-gray-100 p-4 flex flex-col gap-4">
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm">Total Price</p>
                                        <p className="text-sm font-bold">
                                            ${cartPrice}
                                        </p>
                                    </div>{" "}
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm">
                                            Delivery Charge
                                        </p>
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
                                    <Button
                                        onClick={() => setShowCheckout(true)}
                                    >
                                        Checkout
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Modal
                modalContentClassName="min-w-[250px] p-4"
                isOpen={showCheckout}
                onClose={() => setShowCheckout(false)}
            >
                {invoice ? (
                    <div>
                        <p className="text-center bg-green-50 text-green-500 border border-green-500 p-1 mb-6 rounded">
                            Your payment has been success
                        </p>
                        <div className="space-y-4">
                            {invoice?.invoiceCart.map((item) => (
                                <div
                                    key={item.name}
                                    className="flex items-center gap-4 border-b pb-4"
                                >
                                    <div className="flex-1">
                                        <h3 className="font-semibold">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-600">
                                            Qty: {item.qty}
                                        </p>
                                    </div>
                                    <p className="font-bold text-purple-500">
                                        ${item.price}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 space-y-1 text-right">
                            <p>
                                Subtotal:{" "}
                                <span className="font-medium">
                                    ${invoice?.invoiceAmount}
                                </span>
                            </p>
                            <p>
                                Tax: <span className="font-medium">${0}</span>
                            </p>
                            <p>
                                Shipping:{" "}
                                <span className="font-medium">${0}</span>
                            </p>
                            <p className="text-lg font-bold mt-2">
                                Total: ${invoice?.invoiceAmount}
                            </p>
                        </div>
                        <Button onClick={handleShopAgain} className="mt-2">
                            Shop again
                        </Button>
                    </div>
                ) : (
                    <form
                        onSubmit={handleCheckout}
                        className=" w-full md:w-[400px] lg:w-[600px] flex flex-col gap-6 mt-3"
                    >
                        <h1 className="mb-5">Payment Info</h1>
                        <Input
                            label="Name"
                            placeholder="name"
                            name="name"
                            id="name"
                            type="name"
                            error={errors.name}
                        />
                        <Input
                            placeholder="email"
                            name="email"
                            id="email"
                            type="text"
                            label="Email"
                            error={errors.email}
                        />

                        <Button type="submit">Proceed</Button>
                    </form>
                )}
            </Modal>
        </>
    );
};

export default Cart;
