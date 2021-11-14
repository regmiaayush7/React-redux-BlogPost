import { createStore, applyMiddleware } from 'redux';
import { persistStore} from 'redux-persist'
 
import rootReducer from './rootreducer';

const middlewares = [];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store)

export default {store, persistor };