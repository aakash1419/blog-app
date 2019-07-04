import axios from 'axios';

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';

export const getAllPosts = () => {
    return(
        dispatch => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                return(dispatch({type: GET_ALL_POSTS, payload: res.data}))
            })
        }
    )
}