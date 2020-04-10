import { FETCH_PRODUCTS,FILTER_PRODUCTS_BY_SIZE,FILTER_PRODUCTS_BY_PRICE } from "../actions/type"


const initialState= {
    products: [],
    filteredProducts : [],
    size:'',
    sort:''
}
const productReducer = (state = initialState, action)=>{
    switch (action.type){
        case FETCH_PRODUCTS:
            return {
                ...state,
                products:action.payload,
                filteredProducts: action.payload
            }
        case FILTER_PRODUCTS_BY_SIZE:
            return {
                ...state,
                size:action.payload.size,
                filteredProducts: action.payload.products
            }
        case FILTER_PRODUCTS_BY_PRICE:
            return {
                ...state,
                sort: action.payload.sort, 
                filteredProducts: action.payload.products
            }
        default:
            return state;
    }
} 
 
export default productReducer;