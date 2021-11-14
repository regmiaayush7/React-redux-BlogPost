import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Blogreducer from './appreducer/blogreducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['mainreducer']
  }

const rootReducer = combineReducers({
    mainreducer: Blogreducer
});

export default persistReducer(persistConfig, rootReducer)