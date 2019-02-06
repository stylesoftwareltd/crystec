export default function(state = null, action){
    switch(action.type){
        case 'FETCH_PRODUCT': 
            return action.payload || false;
        case 'CLEAR_POST_DATA':
            return null
        default:
            return state;
    }
}