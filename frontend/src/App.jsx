import { useEffect } from "react";

const App = () => {
    useEffect(() => {
        const loadProducts = async () => {
            try {
                let res = await fetch("http://localhost:5001/api/products", {
                    method: "GET",
                });
                let data = await res.json();
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        loadProducts();
    }, []);
    return (
        <div>
            <h1>Hello MOCK data</h1>
        </div>
    );
};

export default App;
