import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import reducer from './reducer'

const middleWares = [thunk]

export const store = createStore(reducer, applyMiddleware(...middleWares))

export default store