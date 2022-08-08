import { createStore } from 'redux'
import { combineReducers } from 'redux'
import AIR_FIRST from './airinfo'
import AIR_SECOND from './airinfo2'
import HomeReducer from './homeinfo'

const reducers = combineReducers({ HomeReducer,AIR_FIRST,AIR_SECOND  })
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;