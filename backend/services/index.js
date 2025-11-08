export const mapUserToUserResponse = (user) => {
    let cartTotal = user.cart.reduce(
        (prev, curr) => (prev += curr.product.price * curr.qty),
        0
    );
    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        cartTotal: cartTotal.toFixed(2),
        cart: user.cart.map((item) => ({
            productId: item.product._id,
            name: item.product.name,
            image: item.product.image,
            price: item.product.price,
            qty: item.qty,
        })),
    };
};
