import rootReducer from "../reducers/rootReducer"
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, [], composeWithDevTools(applyMiddleware(thunkMiddleware)))

export { store }