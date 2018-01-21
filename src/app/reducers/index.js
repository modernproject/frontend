import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import errors from './errors'
import user from './user'
import global from './global'
import postList from './postList'
import post from './post'
import categories from './categories'

const rootReducer = combineReducers({
    global,
    errors,
    user,
    postList,
    post,
    categories,
    router: routerReducer
})

export default rootReducer
