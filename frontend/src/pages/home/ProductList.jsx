import { useEffect, useState } from "react";
import { BASE_URL } from "../../constant/routes";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const loadProducts = async () => {
            try {
                let res = await fetch(`${BASE_URL}/products`, {
                    method: "GET",
                });
                let data = await res.json();
                setProducts(data);
            } catch (error) {
                alert(error.message || "Something went wrong");
            }
        };
        loadProducts();
    }, []);
    return (
        <section className="app-container ">
            <div className="border-b-2 border-violet-700 mb-6 ">
                <p className="text-lg lg:text-xl text-white bg-violet-600 inline-flex px-2 pb-1 pt-3 -skew-5 rounded-sm">
                    Products
                </p>
            </div>
            <div className="grid gap-6 lg:gap-8 xl:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-6">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductList;
