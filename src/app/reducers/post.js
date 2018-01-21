import {
    POST_REQUEST,
    POST_REQUEST_SUCCESS,
    POST_REQUEST_ERROR,
    POST_CLEAR
} from '../actions'

export default function postList(state = {}, action) {
    switch (action.type) {
        case POST_REQUEST_SUCCESS:
            return action.data
        case POST_CLEAR:
            return {}
        default:
            return state
    }
}
