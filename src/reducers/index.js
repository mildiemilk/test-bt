import { combineReducers } from 'redux'

import app from './app'
import user from './user'

import company from './company'
import profile from './profile'

const rootReducer = combineReducers({
  user,
  app,
  company,
  profile,
})

export default rootReducer
