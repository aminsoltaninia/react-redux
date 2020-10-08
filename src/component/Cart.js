import React from 'react';
import {connect} from 'react-redux';
import Product from './Product';
import { checkout } from '../actions/actionCreator';

class ProductItem extends React.Component{


  render(){
    
    const {cardproducts , total , checkout } = this.props ; 
    console.log(this.props)
    const hasproduct = cardproducts.length > 0
    const nodes = hasproduct ? (
         cardproducts.map(product =>{
             return(
                <Product key={product.id} {...product} inventory = {product.quantity} />
             )
           
         })
    ) : (
        <em>Please add some products to cart</em>
    )
    return (
       <div>
           <h3>Your Cart</h3>
           <div>{nodes}</div>
           <p>Total: ${total}</p>
           <button disabled={hasproduct ? '' : 'disabled'} onClick={checkout}>
               Checkout
           </button>
       </div>
        
    );
  }
  
}

const getCardProducts = (state)=>{
    return state.card.addedIds.map(id =>
        {
            return {
                ...state.products[id],
                quantity : (state.card.quantityById[id] || 0 )
            }
        })
}

const getTotal = (state)=>{
    return state.card.addedIds.reduce((total , id)=> total + state.products[id].price * (state.card.quantityById[id] || 0) , 0)
}
const mapStateTOprops = (state)=>{
    return {
        cardproducts : getCardProducts(state),
        total : getTotal(state)
    }
}

const mapDispatchToProps = dispatch =>({
    checkout : ()=> dispatch(checkout())
})

export default connect(mapStateTOprops,mapDispatchToProps)(ProductItem);
