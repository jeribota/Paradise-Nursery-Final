import React, { createContext, useReducer } from 'react';

// Initial state of the cart
const initialState = {
    products: [
        { id: 1, name: 'Monstera Deliciosa', price: 25.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBDbslTnatSDPWRGqboaAJPP4DXIhPUcba0A&s' },
        { id: 2, name: 'Snake Plant', price: 15.00, image: 'data:image/jpeg;base64,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' },
        { id: 3, name: 'Fiddle Leaf Fig', price: 30.00, image: 'data:image/jpeg;base64,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' },
        { id: 4, name: 'Peace Lily', price: 20.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ApRt74ZDVVW3UR6wGiWtR2njozG30vKXdQ&s' },
        { id: 5, name: 'ZZ Plant', price: 22.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPONiZ9b1gjgDw8QIy2bo6SJa25Jm4ILpkpA&s' },
        { id: 6, name: 'Aloe Vera', price: 10.00, image: 'https://www.ikea.com/us/en/images/products/aloe-vera-potted-plant-aloe__67410_pe181254_s4.jpg' },
    ],
    cartItems: [],
    totalCost: 0,
};

// Create a context
export const CartContext = createContext(initialState);

// Reducer to handle actions
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                const updatedCart = state.cartItems.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
                const newTotalCost = state.totalCost + action.payload.price;
                return { ...state, cartItems: updatedCart, totalCost: newTotalCost };
            } else {
                const newItem = { ...action.payload, quantity: 1 };
                const newTotalCost = state.totalCost + newItem.price;
                return { ...state, cartItems: [...state.cartItems, newItem], totalCost: newTotalCost };
            }

        case 'INCREASE_QUANTITY':
            const increasedCart = state.cartItems.map(item =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            const increasedItem = state.cartItems.find(item => item.id === action.payload);
            return { ...state, cartItems: increasedCart, totalCost: state.totalCost + increasedItem.price };

        case 'DECREASE_QUANTITY':
            const decreasedCart = state.cartItems.map(item =>
                item.id === action.payload && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
            const decreasedItem = state.cartItems.find(item => item.id === action.payload);
            return { ...state, cartItems: decreasedCart, totalCost: state.totalCost - decreasedItem.price };

        case 'REMOVE_ITEM':
            const remainingItems = state.cartItems.filter(item => item.id !== action.payload);
            const removedItem = state.cartItems.find(item => item.id === action.payload);
            const newTotalCost = state.totalCost - (removedItem.price * removedItem.quantity);
            return { ...state, cartItems: remainingItems, totalCost: newTotalCost };

        default:
            return state;
    }
};

// Cart provider to wrap the application
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Action creators
    const addToCart = product => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const increaseQuantity = id => {
        dispatch({ type: 'INCREASE_QUANTITY', payload: id });
    };

    const decreaseQuantity = id => {
        dispatch({ type: 'DECREASE_QUANTITY', payload: id });
    };

    const removeItem = id => {
        dispatch({ type: 'REMOVE_ITEM', payload: id });
    };

    return (
        <CartContext.Provider
            value={{
                products: state.products,
                cartItems: state.cartItems,
                totalCost: state.totalCost,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeItem
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
