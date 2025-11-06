const CartCard = () => {
    return (
        <div className="flex justify-between border border-gray-200 rounded-sm shadow-xs mb-3 py-1  lg:py-1 lg:px-2 gap-4">
            <div className="h-20 w-20 bg-gray-50 border border-gray-100">
                <img
                    src="https://res.cloudinary.com/habib610/image/upload/v1762413740/products/controller_i7ymqs.webp"
                    alt="avatar"
                    className="w-full h-full"
                />
            </div>
            <div className="flex-1">
                <h2 className="text-xl font-bold">Product name</h2>

                <div className="flex justify-between items-center">
                    <p className="text-orange-400 text-2xl">$123</p>
                    <div className="flex justify-between items-center">
                        <button className="bg-purple-500 px-2 py-1 text-white rounded-md">
                            -
                        </button>
                        <div className="text-sm px-2 py-1">1</div>
                        <button className="bg-purple-500 px-2 py-1 text-white rounded-md">
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
