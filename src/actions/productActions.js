import { FETCH_PRODUCTS } from "./type"
import { FILTER_PRODUCTS_BY_SIZE } from "./type"
import { FILTER_PRODUCTS_BY_PRICE } from "./type"

export const fetchProducts = () =>{
    return (dispatch)=>{
        fetch("http://localhost:5000/products/")
        .then(res=>res.json())
        .then(data=>{
            return dispatch(getProductList(data));
        });
    }
}

export const getProductList= (data)=>{
    return {
        type: FETCH_PRODUCTS,
        payload: data
    }
}

export const filterProductsBySize = (products,size)=>(dispatch)=>{
    return dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size: size,
            products : size === '' ? products : products.filter(a=>a.availableSizes.indexOf(size)>=0)
        }
    })
}

export const sortProducts = (products,sort)=>(dispatch)=>{
    let item = [...products]
    if(sort !== ''){
        item.sort((a,b)=>(sort == 'lowest') ? (a.price - b.price) : (b.price - a.price))
    }
    else{
        item.sort((a,b)=>(a.id-b.id));
    }
    return dispatch({
        type: FILTER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            products : item
        }
    })
}