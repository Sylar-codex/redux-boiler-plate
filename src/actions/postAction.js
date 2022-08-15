import { FETCH_POSTS, NEW_POSTS } from "./Type";

export const fetchPosts = () => (dispatch) => {
    console.log('fetching')
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        }).catch((err) => {
            console.log(err.response.data);
        })

}
export const createPost = (postData) => (dispatch) => {

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POSTS,
            payload: post
        }))

}
