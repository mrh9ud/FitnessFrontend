import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/rootReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store