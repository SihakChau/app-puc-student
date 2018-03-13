import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import { navMiddleware } from '../config/routes'

const middleware = [navMiddleware, thunkMiddleware]
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
