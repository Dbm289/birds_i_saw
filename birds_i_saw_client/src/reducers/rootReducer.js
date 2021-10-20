import { combineReducers } from 'redux'

import { birdsReducer } from './birdsReducer'

export const rootReducer = combineReducers({
    birds: birdsReducer

})