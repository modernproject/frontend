import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import errors from './errors'
import user from './user'
import global from './global'
import posts from './posts'

const rootReducer = combineReducers({
    global,
    errors,
    user,
    posts,
    router: routerReducer
})

export default rootReducer
