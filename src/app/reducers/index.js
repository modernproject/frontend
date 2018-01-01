import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import errors from './errors'
import user from './user'
import global from './global'

const rootReducer = combineReducers({
    global,
    errors,
    user,
    router: routerReducer
})

export default rootReducer
