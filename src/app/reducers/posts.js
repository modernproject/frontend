import {
    POSTS_REQUEST,
    POSTS_REQUEST_SUCCESS,
    POSTS_REQUEST_ERROR
} from '../actions'

export default function posts(state = {}, action) {
    switch (action.type) {
        case POSTS_REQUEST_SUCCESS:
            return action.data
        default:
            return state
    }
}
