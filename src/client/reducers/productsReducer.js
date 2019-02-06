export default function(state = {
    posts: null
}, action){
    switch(action.type){
        case 'FETCH_PRODUCTS':
            return {...state, arr: action.payload || false};
        default:
            return state;
    }
}