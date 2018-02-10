import {
    POST_LIST_REQUEST,
    POST_LIST_REQUEST_SUCCESS,
    POST_LIST_REQUEST_ERROR
} from '../actions'

export default function postList(state = [], action) {
    switch (action.type) {
        case POST_LIST_REQUEST_SUCCESS:
            return action.data
        default:
            return state
    }
}
