
export const setAllProducts = (products) => ({
    type: 'setProducts',
    payload: products,
});

export const setCart = (cart) => ({
    type: 'setCart',
    payload: cart,
});

export const addToCart = (newProd) => ({
    type: 'addToCart',
    payload: newProd,
});

export const removeFromCart = (id) => ({
    type: 'removeFromCart',
    payload: id,
});

export const changeCountInCart = (id, newCount) => ({
    type: 'changeCountInCart',
    payload: { id, newCount },
});
