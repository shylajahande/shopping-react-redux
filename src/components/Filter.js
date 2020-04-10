import React, { Component } from 'react'
import {connect} from 'react-redux'
import {filterProductsBySize,sortProducts} from '../actions/productActions'

class Filter extends Component {
    render() {
        const {products,filterProducts,size,sort,filterProductsBySize,sortProducts} = this.props;
        return (
            <div className="row">
                <div className="col-md-4">
                    {filterProducts.length} products found.
                </div>
                <div className="col-md-4">
                    <label>
                        Order By
                        <select className="form-control" value={sort} onChange= {(e)=>sortProducts(filterProducts,e.target.value)}>
                            <option value=''>Select</option>
                            <option value='lowest'>Lowest to Higest</option>
                            <option value='highest'>Higest to Lowest</option>
                        </select>
                    </label>
                </div> 
                <div className="col-md-4">
                    <label>
                        Filter Size
                        <select className="form-control" value={size} onChange= {(e)=>filterProductsBySize(products,e.target.value)}>
                            <option value=''>All</option>
                            <option value='X'>XS</option>
                            <option value='S'>S</option>
                            <option value='M'>M</option>
                            <option value='L'>L</option>
                            <option value='XL'>XL</option>
                            <option value='XXL'>XXL</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        products: state.items.products,
        filterProducts: state.items.filteredProducts,
        size: state.items.size,
        sort: state.items.sort
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        filterProductsBySize: (products,size)=>{dispatch(filterProductsBySize(products,size))},
        sortProducts: (products,sort)=>{dispatch(sortProducts(products,sort))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filter);