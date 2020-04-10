import { ADD_TO_CART,REMOVE_FROM_CART } from "../actions/type"

const initialState= {
    cartItems: []
}

const cartReducer = (state = initialState, action)=>{
    switch (action.type){
        case ADD_TO_CART:
            return {
                cartItems:action.payload.cartItems,
            }
        case REMOVE_FROM_CART:
            return {
                cartItems:action.payload.cartItems,
            }
        default:
            return state;
    }
} 
 
export default cartReducer;