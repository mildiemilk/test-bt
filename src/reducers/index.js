import { combineReducers } from 'redux'

import app from './app'
import user from './user'

const rootReducer = combineReducers({
  user,
  app,
})

export default rootReducer
