import * as actionType from '../actions/actionTypes'

const Products = ( state = {} , action )=>{
    // console.log(state,action)
    switch  (action.type) {
        case actionType.RECEIVE_PRODUCTS:
             return {
                 ...state ,
                 ...action.products.reduce((obj , product)=>{
                obj[product.id]= product;
                return obj; 
             } , {} )};
        case actionType.ADD_TOCARD:
             let { productId} = action ;
             let product =state[productId]
             return {
                 ...state ,
                 [productId] : {
                     ... product ,
                     inventory : product.inventory - 1 
                 }
             }

        default : 
            return state;
           
    }
}

export default Products;