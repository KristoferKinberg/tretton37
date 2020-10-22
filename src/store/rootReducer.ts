import { combineReducers } from 'redux';
import Coworker from './coworker/coworker.reducer';

const rootReducer = combineReducers({
    data: Coworker
});

export default rootReducer;
