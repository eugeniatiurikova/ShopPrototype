const initialState = {
    allProducts: [],
    cart: []
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'setProducts':
            return { ...state, allProducts: action.payload };
        case 'setCart':
            return { ...state, cart: action.payload };
        case 'addToCart':
            return { ...state, cart: [...state.cart, action.payload] };
        case 'removeFromCart':
            return { ...state, cart: state.cart.filter((itm) => itm.id !== action.payload) };
        case 'changeCountInCart': {
            let newCart = [...state.cart];
            newCart.forEach(elem => {
                if (elem.id === action.payload.id) elem.count = action.payload.newCount
            });
            return { ...state, cart: newCart };
        }
        default: return state
    }
}