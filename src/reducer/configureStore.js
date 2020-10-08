import {createStore , combineReducers ,applyMiddleware } from 'redux';
import Products from './products';
import Card from './cart'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

export const confgureStore = ()=>{
   
    const store = createStore(
        combineReducers({
            products : Products,
            card : Card
        })
        , composeWithDevTools(applyMiddleware(thunk , logger))
    )
    return store ;
}