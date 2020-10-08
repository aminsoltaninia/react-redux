import * as actionType from '../actions/actionTypes'
const initialState = {
    addedIds : [],
    quantityById : { }
}

const Cart = (state = initialState , action)=>{
    
      switch (action.type) {
          case actionType.CHECK_OUT : 
             return initialState
          case actionType.ADD_TOCARD:
              
              return {
                addedIds : addId(state.addedIds , action),
                quantityById : quantityById(state.quantityById , action)
            };
          
          default:
              return state;
      }

}

const addId = (state = initialState.addedIds , action)=>{
      if(state.indexOf(action.productId)!== -1) {
          return state;
      }
      return [...state , action.productId]// update state
}

const quantityById = (state=initialState.quantityById , action)=>{
     let {productId} = action
     return {
         ...state , 
         [productId]:(state[productId] || 0 ) + 1
     }
}

export default Cart;