const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden group flex flex-col justify-between">
            <div className="overflow-hidden relative">
                <div className="absolute inset-x-0 bottom-96 top-0   group-hover:bottom-0 duration-700 bg-black/60 overflow-hidden px-8 text-white">
                    <p className="text-white font-medium text-base lg:text-xl p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam, veniam?
                    </p>
                </div>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transform  transition duration-500 ease-in-out"
                />
                <div className="px-4 text-center mt-3">
                    {" "}
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        {product.name}
                    </h2>
                    <p className="text-xl font-bold text-violet-600">
                        ${product.price.toFixed(2)}
                    </p>
                </div>
            </div>

            <div className="px-4 pb-4">
                <button className="mt-3 w-full bg-violet-500 hover:bg-violet-600 text-white py-2 rounded-xl transition hover:cursor-pointer">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
