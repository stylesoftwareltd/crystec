import {landingPageAPI} from './../endpoints';

export const fetchPost = (postID) => async (dispatch, getState, api) => {

    const _query = {
        query: `{
            Blog(slug: "${postID}"){
                postTitle
                post
                imageURL
            }
        }`
    };

    await api.post(landingPageAPI, _query).then(response => {
        dispatch({
            type: 'FETCH_POST',
            payload: response.data
        })
    }).catch((err) => {
        console.log('error', err);
    })
    
};

export const fetchPosts = () => async (dispatch, getState, api) => {

    const _query = {
        query: `{
            allBlogs {
                postTitle
                shortdescription
                slug
                imageURL
              }
        }`
    };

    await api.post(landingPageAPI, _query).then(response => {
        console.log(response);
        console.log('fetch post action dispatched');
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        })
    }).catch((err) => {
        console.log('error', err);
    })
    
};


export const fetchProduct = (productID) => async (dispatch, getState, api) => {

    const _query = {
        product_id: productID
    };

    await api.post("https://stg.uk.hottubinstyle.co.uk/api/products/get_product_details", _query).then(response => {
        dispatch({
            type: 'FETCH_PRODUCT',
            payload: response.data
        })
    }).catch((err) => {
        console.log('error', err);
    })
    
};


export const fetchProducts = () => async (dispatch, getState, api) => {
    
    await api.get("https://stg.uk.hottubinstyle.co.uk/api/products").then(response => {
        dispatch({
            type: 'FETCH_PRODUCTS',
            payload: response.data
        })
    }).catch((err) => {
        console.log('error', err);
    })
    
};

export const clearPostData = () => (dispatch) => {
    dispatch({
        type: 'CLEAR_POST_DATA'
    })
};


