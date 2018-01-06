import {
    POSTS_OPTIONS_REQUEST,
    POSTS_OPTIONS_REQUEST_SUCCESS,
    POSTS_OPTIONS_REQUEST_ERROR
} from '../actions'

export default function categories(state = {}, action) {
    switch (action.type) {
        case POSTS_OPTIONS_REQUEST_SUCCESS:
            return action.data
        default:
            return state
    }
}
