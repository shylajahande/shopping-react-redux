import React, { Component } from 'react'
import util from '../util'
import { connect } from 'react-redux';
import {removeCartItems,addQty} from '../actions/cartActions'

class Basket extends Component {
    render() {
        const {cartItems,removeCartItems,addQty} = this.props
        return (
            <div className="alert alert-info">
                {cartItems.length===0 ? "Basket is Empty" : <div>You have {cartItems.length} products in basket.</div>}
                {cartItems.length > 0 &&
                    <div>
                        <ul>
                            {cartItems.map(item=>
                                <li key={item.id}>
                                    <b>{item.title}</b>
                                    X <a onClick={()=>addQty(item.id,item.count)} className="primary" href="#">+</a>
                                      {/* <input value={item.count} onChange={this.handleChange} min="1" max="100"/> */}
                                      {item.count}
                                      {/* <button onClick = {this.DecreaseItem}>-</button>  */}
                                      = {item.price * item.count}
                                    <button className="btn btn-danger" onClick={()=>removeCartItems(cartItems,item)}>X</button>
                                </li>    
                            )}
                        </ul>
                        Total: {util.formatCurrency(cartItems.reduce((a,c)=>a+(c.price*c.count),0))}
                        <br/>
                        <button className="btn btn-primary" onClick={()=>alert("Checkout needs to implement..")}>Checkout</button>
                    </div>
                }
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        cartItems: state.cart.cartItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        removeCartItems: (cartItems,item)=> {dispatch(removeCartItems(cartItems,item))},
        addQty: (id,count)=>{dispatch(addQty(id,count))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Basket);