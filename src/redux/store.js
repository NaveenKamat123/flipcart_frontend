import {createStore,combineReducers,applyMiddleware} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from 'redux-thunk';
import {  getProductDetailsReducer, getProductsReducer } from './Reducers/ProductReducer';
import {CartReducer} from './Reducers/CartReducer';


const reducer=combineReducers({
    getProducts:getProductsReducer,
    getProductDetails:getProductDetailsReducer,
    cart:CartReducer
});

const middleware=[thunk];



const store=createStore(
    reducer,
    composeWithDevTools (
        applyMiddleware(...middleware),
     
      ),
  
    
)

export default store;