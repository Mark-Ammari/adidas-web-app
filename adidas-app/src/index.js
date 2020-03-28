import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import linksReducer from './store/reducers/links';
import trendingReducer from './store/reducers/trending';
import productListReducer from './store/reducers/productList';
import searchProductReducer from './store/reducers/searchProduct';
import sizesProductReducer from './store/reducers/sizesProduct';
import ratingsAndReviewsReducer from './store/reducers/ratingsAndReviews';
import filterReducer from './store/reducers/filter';
import productItemsReducer from './store/reducers/ProductItems';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducter = combineReducers({
    linksData: linksReducer,
    trendingList: trendingReducer,
    productList: productListReducer,
    searchProduct: searchProductReducer,
    sizesProduct: sizesProductReducer,
    ratingsAndReviews: ratingsAndReviewsReducer,
    filterItems: filterReducer,
    productItems: productItemsReducer
})

const store = createStore(rootReducter, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
