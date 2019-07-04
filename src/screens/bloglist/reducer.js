import {GET_ALL_POSTS} from './action';

export const BlogList = (state = {posts: 'initial post'}, action) => {
    switch(action.type) {
        case GET_ALL_POSTS:
            return({...state, posts: action.payload})
        default:
            return state;    
    }
}