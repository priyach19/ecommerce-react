// Import createSlice from redux toolkit//
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
//Initial State(cartItems--> after fetching api we want to kept data in local storage)//
const INIT_STATE = {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    cartTotalQuantity: 0,
    cartTotalAmount : 0,
    orderStatus:false
};

// CARTSLICE for creating action on every Reducer
const cartSlice = createSlice({
    name: 'cart',
    initialState: INIT_STATE,
    reducers: {
        //reducer function to add item in cart//
        addCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
        // if you twice click add to cart thent simply item is increased in cart
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].qnty += 1;
                toast.info("Item increase in cart!", {
                    position: "top-right"
                })
            } else {
                const tempProduct = { ...action.payload, qnty: 1 }
                state.cartItems.push(tempProduct)
                toast.success(`Successfully Added ${action.payload.name} in Cart!`, {
                    position: "bottom-right"
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        //reducer fn for remove item from cart
        removeFromCart: (state, action) => {
            toast.error('Successfully removed from cart!', {
                position: "top-right"
            })
            // simply i removed clicked cart item from cart array
            const filterCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            state.cartItems = filterCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        //reducer fn for derease item in cart
        decreaseCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (state.cartItems[itemIndex].qnty > 1) {
                state.cartItems[itemIndex].qnty -= 1;

                toast.info("Decreased product quantity", {
                    position: "bottom-left",
                });
            }
            // if item quantity in cart is 1 , we simply filter that item from CartItems array
            else if (state.cartItems[itemIndex].qnty === 1) {
                const removeCartItem = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );
                state.cartItems = removeCartItem;
                toast.error("Product removed from cart !", {
                    position: "bottom-left",
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        //reducer Fn for items Total price
        getTotals:(state, action) => {
            let  total = state.cartItems.reduce((cartTotal, cartItem) => {
                    const { price, qnty } = cartItem;
                    const itemTotal = price * qnty;
                    cartTotal += itemTotal;
                    return cartTotal;
                }, 0 );
            state.cartTotalAmount = total;
        },
        //reducer Fn for clear whole cart
        clearCart : (state, action) => {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error("Your Cart is Clear now !", {
                position: "bottom-left",
            });
        },
        placeOrder:(state,action)=>{
            console.log('placing order');
            state.cartItems=[];
            localStorage.removeItem('cartItems');
            localStorage.clear();
            toast.success("Order Placed Successfully!",{position:"bottom-right"});

        }
       
    }
});

//action creators are generated for each case reducer function
export const { addCart, removeFromCart, decreaseCart , getTotals , clearCart,placeOrder} = cartSlice.actions;

export default cartSlice.reducer;