import {
    POST_LIST_OPTIONS_REQUEST,
    POST_LIST_OPTIONS_REQUEST_SUCCESS,
    POST_LIST_OPTIONS_REQUEST_ERROR
} from '../actions'

export default function categories(state = {}, action) {
    switch (action.type) {
        case POST_LIST_OPTIONS_REQUEST_SUCCESS:
            return action.data
        default:
            return state
    }
}
