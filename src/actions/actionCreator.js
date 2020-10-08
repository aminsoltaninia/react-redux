import *  as actionTypes from './actionTypes'

export const receiveProducts = products =>({
    type : actionTypes.RECEIVE_PRODUCTS ,
    products
})

export const addToCard = productId =>{
    return {
        type : actionTypes.ADD_TOCARD , 
        productId
    }
}


export const checkout = ()=>{
    return {
        type : actionTypes.CHECK_OUT ,
    }
} 