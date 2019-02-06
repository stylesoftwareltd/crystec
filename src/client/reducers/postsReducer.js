export default function(state = {
    posts: null
}, action){
    switch(action.type){
        case 'FETCH_POSTS': 
        	console.log('fetch post REDUX updated');
            return {...state, arr: action.payload.data.allBlogs || false};
        default:
            return state;
    }
}