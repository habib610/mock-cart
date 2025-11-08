import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";

import Button from "../../components/ui/Button";
import {
    DECREMENT_CART_ITEM_ENDPOINT,
    INCREMENT_CART_ITEM_ENDPOINT,
    REMOVE_FROM_CART_ENDPOINT,
} from "../../constant/routes";
import useCartNetwork from "../../hooks/useCartNetwork";

const CartCard = ({ cart }) => {
    const { handleUpdateCart } = useCartNetwork();
    const productId = cart?.productId;

    const removeFromCart = () => {
        handleUpdateCart(productId, REMOVE_FROM_CART_ENDPOINT, "DELETE");
    };

    const handleIncrementCartItem = () => {
        handleUpdateCart(productId, INCREMENT_CART_ITEM_ENDPOINT, "PUT");
    };

    const handleDecrementCartItem = () => {
        handleUpdateCart(productId, DECREMENT_CART_ITEM_ENDPOINT, "PUT");
    };

    return (
        <div className="flex justify-between border border-gray-200 rounded-sm shadow-xs mb-3 p-1  lg:py-1 lg:px-2 gap-4">
            <div className="h-20 w-20 bg-gray-50 border border-gray-100">
                <img src={cart?.image} alt="avatar" className="w-full h-full" />
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg lg:text-xl font-bold text-gray-700">
                        {cart?.name}
                    </h2>
                    <button
                        onClick={removeFromCart}
                        className="text-gray-500 rounded-full hover:text-rose-500 border p-0.5 cursor-pointer"
                    >
                        <LiaTimesSolid />
                    </button>
                </div>

                <div className="flex justify-between items-center">
                    <p className="text-orange-400 text-base md:text-lg lg:text-2xl">
                        ${cart?.price}
                    </p>
                    <div className="flex justify-between items-center">
                        <Button
                            onClick={handleDecrementCartItem}
                            className="py-1 bg-transparent border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white"
                        >
                            <IoRemoveCircleOutline />
                        </Button>
                        <div className="text-base px-2 py-1 lg:text-2xl">
                            {cart?.qty}
                        </div>
                        <Button
                            onClick={handleIncrementCartItem}
                            className="py-1"
                        >
                            <IoAddCircleOutline />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
