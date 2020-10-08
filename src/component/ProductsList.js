import React from 'react';
import ProductItem from './ProductItem';
import {connect} from 'react-redux'

class Productist extends React.Component{


  render(){
    
    const {products} = this.props;  
    
    const productList = products.map(prod =>{
        return (
          <ProductItem key={prod.id} product ={prod}/>
        )
    })
    return (
      <>
        <h3>Products</h3>
        {productList}
      </>
     
    );
  }
  
}

const getProducts = pro => {
   
    return Object.keys(pro).map(key => pro[key])
}
const mapStateToProps = (state)=>{
  
  return{
     products : getProducts(state.products) 
  }
}


export default connect(mapStateToProps)(Productist);
