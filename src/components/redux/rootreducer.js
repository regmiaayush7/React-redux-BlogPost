import { combineReducers } from 'redux';
import Blogreducer from './appreducer/blogreducer'

export default combineReducers({
    mainreducer: Blogreducer
});