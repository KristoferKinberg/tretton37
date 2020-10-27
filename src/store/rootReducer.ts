import { combineReducers } from 'redux';
import Coworker from './coworker/coworker.reducer';
import Pagination from './pagination/pagination.reducer';

const rootReducer = combineReducers({
    data: Coworker,
    pagination: Pagination,
});

export default rootReducer;
