import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import postsReducer from './postsReducer';
import postReducer from './postReducer';
import productsReducer from './productsReducer';
import productReducer from './productReducer';

export default combineReducers({
    form: formReducer,
    posts: postsReducer,
    post: postReducer,
    products: productsReducer,
    product: productReducer,
});