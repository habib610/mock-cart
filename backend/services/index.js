export const mapUserToUserResponse = (user) => {
    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        cart: user.cart.map((item) => ({
            productId: item.product._id,
            name: item.product.name,
            image: item.product.image,
            price: item.product.price,
            qty: item.qty,
        })),
    };
};
