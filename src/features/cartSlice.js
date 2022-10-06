import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify'

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action){

            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.cartItems.push(tempProduct);
                toast.success(`added ${action.payload.name} to cart`, {
                    position: "bottom-left",
                });
            }
        },
        removeFromCart(state, action){
           const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
                
            )

            state.cartItems = nextCartItems
            toast.error(`${action.payload.name} removed from cart`, {
                position: "bottom-left",
            });
        },
        decreaseCart(state, action){
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
                )
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1
            } else if (state.cartItems[itemIndex].cartQuantity === 1){
                const nextCartItems = state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id                    
                )
                state.cartItems = nextCartItems
            }
        },
        clearCart(state){
            state.cartItems = []
        },
        getTotals(state, action){
        let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem) => {
            const {regular_price, cartQuantity } = cartItem;
            const itemTotal = regular_price * cartQuantity;

            cartTotal.total += itemTotal
            cartTotal.quantity += cartQuantity
            return cartTotal
        }, 
        {
            total: 0,
            quantity: 0
        }
        );
        total = parseFloat(total.toFixed(2));
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total
    }
    }
})

export const { addToCart, removeFromCart, decreaseCart, getTotals, clearCart } = cartSlice.actions;
export default cartSlice.reducer;