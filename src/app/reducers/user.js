import {
    USER_REQUEST_SUCCESS,
    USER_REQUEST_ERROR,
    USER_CLEAR
} from '../actions'

export default function user(state = {}, action) {
    switch (action.type) {
        case (USER_REQUEST_ERROR, USER_CLEAR):
            return {}
        case USER_REQUEST_SUCCESS:
            return action.data
        default:
            return state
    }
}
