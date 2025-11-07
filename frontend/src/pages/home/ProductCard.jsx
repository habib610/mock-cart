import Button from "../../components/ui/Button";

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group flex flex-col justify-between">
            <div className="relative overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
                />

                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out cursor-pointer">
                    <p className="text-white font-medium text-center px-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam, veniam?
                    </p>
                </div>
            </div>

            {/* Product info */}
            <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.name}
                </h2>
                <p className="text-xl font-bold text-violet-600">
                    ${product.price.toFixed(2)}
                </p>

                <Button className="mt-3 w-full rounded-xl transition">
                    Add to Cart
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;
