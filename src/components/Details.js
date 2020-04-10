import React from 'react'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
import {connect} from 'react-redux'

function Details(props) {
    const {products} = props;
    let id = props.match.params.id;
    const p1 = products.find(item=>{
        console.log(id);
        return item.id === 9
    });
    console.log(products);
    console.log(id);
    console.log(p1);
    return (
        <div>
            <p>{p1.title}</p>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        products : state.items.products
    }
}
export default connect(mapStateToProps)(Details);