import { ADD_TO_CART } from "./type"
import { REMOVE_FROM_CART } from "./type"
import { ADD_QTY } from "./type"

export const addToCart = (cartItems,product)=> (dispatch) =>{
    const cart = [...cartItems];
    let productAlreadyInCart = false; 
    cart.map(item=>{
        if(item.id === product.id){
            item.count++;
        }
    })
    if(!productAlreadyInCart){
       cart.push({...product,count: 1,inCart: true});
    }
    localStorage.setItem('cartItems',JSON.stringify(cart));
    return dispatch({
        type : ADD_TO_CART,
        payload: {
            cartItems : cart
        }
    })
}

export const removeCartItems = (cartItems,product)=> (dispatch) =>{
    const cart = cartItems.filter(elm => elm.id != product.id);
    localStorage.setItem('cartItems',cart);
    return dispatch({
        type : REMOVE_FROM_CART,
        payload: {
            cartItems : cart
        }
    })
}

export const addQty = (id,count)=> (dispatch) =>{

    return dispatch({
        type : ADD_QTY,
        payload: {
            //cartItems : cart
        }
    })
}
