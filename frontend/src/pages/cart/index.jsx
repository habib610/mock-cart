import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import { BASE_URL } from "../../constant/routes";
import CartCard from "./CartCard";

const Cart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const loadCart = async () => {
            try {
                let res = await fetch(`${BASE_URL}/user/cart`, {
                    method: "GET",
                });
                let data = await res.json();
                setCart(data);
            } catch (error) {
                console.log(error);
            }
        };
        loadCart();
    }, []);
    return (
        <section className="app-top-space">
            <div className="app-container">
                {/* <h1 className="text-4xl">Cart</h1> */}
                <div className="flex justify-between lg:justify-around gap-4 flex-wrap">
                    <div className="w-full md:w-6/12 lg:w-7/12  xl:w-6/12 ">
                        {cart.map((item) => (
                            <CartCard key={item._id} cart={item} />
                        ))}
                    </div>

                    <div className="w-full md:w-5/12 lg:w-4/12 xl:w-4/12  ">
                        <h1 className="text-2xl mb-6">Product details</h1>
                        <div className="bg-gray-100 p-4 flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <p className="text-sm">Total Price</p>
                                <p className="text-sm font-bold">$1200</p>
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
                                <p className="text-xl font-bold">$1200</p>
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
