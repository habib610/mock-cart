import { Route, Routes } from "react-router";
import Navbar from "./components/shared/Navbar";
import Cart from "./pages/cart";
import Home from "./pages/home";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    );
};

export default App;
