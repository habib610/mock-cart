import { Route, Routes } from "react-router";
import Loading from "./components/shared/Loading";
import Navbar from "./components/shared/Navbar";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Login from "./pages/login";

const App = () => {
    return (
        <>
            <Loading />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
};

export default App;
