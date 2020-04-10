import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchProducts} from '../actions/productActions'
import Filter from './Filter';
import Title from './Title';
import Product from './Product';

class ProductList extends Component {
    componentDidMount(){
        this.props.fetchProducts();
    }
    render() {
        const {products,cartItems, addToCart} = this.props;
        const productsItems = products.map(product=>(
            <Product product={product} key={product.id}/>
        ))
        return (
            <div className="container">
                <Title name="our" title="products"/>
                <div className="row">
                    <Filter/>
                </div>
                <div className="row">
                    {productsItems}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        products : state.items.filteredProducts,
        cartItems: state.cart.cartItems,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        fetchProducts: ()=>{dispatch(fetchProducts())},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductList);