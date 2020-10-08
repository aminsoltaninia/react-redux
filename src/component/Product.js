import React from 'react';


class Product extends React.Component{


  render(){
      // console.log(this.props)
    const {title , price , inventory } = this.props;  
    return (
   
        <div>
            <h3>{title}</h3>
            <p>${price} * {inventory}</p>
        </div>
        
    );
  }
  
}

export default Product;
