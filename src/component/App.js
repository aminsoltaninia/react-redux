import React from 'react';
import shop from '../api/shop';
import ProductList from './ProductsList';
import Cart from './Cart'
import {connect} from 'react-redux'
import { receiveProducts } from '../actions/actionCreator';

class App extends React.Component{

  
  componentWillMount(){
   
    shop.getProducts((products)=>{
      this.props.receiveProducts(products)
    })
  }

  render(){
    return (
      <div>
         <h2>shopping card</h2>
         <hr/>
         <ProductList />
         <hr/>
         <Cart/>
      </div>
    
    );
  }
  
}


const mapDispatchToProps = dispatch=>{
    return{
      receiveProducts : products => dispatch(receiveProducts(products))
    }   
}

export default connect(null,mapDispatchToProps)(App) ;
