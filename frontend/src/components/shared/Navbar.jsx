const Navbar = () => {
    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-md ">
            <div className="app-container mx-auto flex justify-between items-center px-6 py-1 md:py-2 relative">
                <h1>Mock Cart</h1>

                <nav className="hidden md:flex items-center space-x-8">
                    <ul>
                        <li>Products</li>
                    </ul>
                </nav>
                <div>cart</div>
            </div>
        </header>
    );
};

export default Navbar;
