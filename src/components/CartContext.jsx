import React, { createContext, useContext, useReducer } from "react";

// Create the Cart Context
const CartContext = createContext();

// Cart reducer to handle cart actions
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const existingProduct = state.cart.find((item) => item.id === action.payload.id);
            if (existingProduct) {
                // Increment quantity if product already exists
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                // Add new product to cart
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                };
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case "CLEAR_CART":
            return {
                ...state,
                cart: [],
            };
        default:
            return state;
    }
};

// Cart Provider to wrap the app
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { cart: [] });

    return (
        <CartContext.Provider value={{ cart: state.cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the Cart Context
export const useCart = () => useContext(CartContext);