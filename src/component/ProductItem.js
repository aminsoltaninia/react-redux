import React from 'react';
import Product from './Product';
import {connect} from 'react-redux';
import {addToCard} from '../actions/actionCreator'

class ProductItem extends React.Component{


  render(){
    const {product , addToCard } = this.props;  
    
    return (
   
        <div>
            <Product {...product} />
            <button disabled={product.inventory > 0 ? '' : 'disabled'} onClick={() => addToCard(product.id)}>
                {product.inventory > 0 ? 'Add to card' : 'Sold out'}
                
            </button>
        </div>
        
    );
  }
  
}

// const mapStateToProps= (state)=>{
//    return { products : state.products }
// }

const mapDispatchToProps = dispatch=>{
  return{
    addToCard : productId => dispatch(addToCard(productId))
  }   
}

export default connect(null, mapDispatchToProps )(ProductItem);
