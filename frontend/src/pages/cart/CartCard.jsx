import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

import Button from "../../components/ui/Button";

const CartCard = ({ cart }) => {
    const product = cart?.product || {};

    return (
        <div className="flex justify-between border border-gray-200 rounded-sm shadow-xs mb-3 py-1  lg:py-1 lg:px-2 gap-4">
            <div className="h-20 w-20 bg-gray-50 border border-gray-100">
                <img
                    src={product.image}
                    alt="avatar"
                    className="w-full h-full"
                />
            </div>
            <div className="flex-1">
                <h2 className="text-lg lg:text-xl font-bold">{product.name}</h2>

                <div className="flex justify-between items-center">
                    <p className="text-orange-400 text-base md:text-lg lg:text-2xl">
                        ${product.price}
                    </p>
                    <div className="flex justify-between items-center">
                        <Button className="py-1 bg-transparent border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white">
                            <IoRemoveCircleOutline />
                        </Button>
                        <div className="text-base px-2 py-1 lg:text-2xl">
                            {cart.qty}
                        </div>
                        <Button className="py-1">
                            <IoAddCircleOutline />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
