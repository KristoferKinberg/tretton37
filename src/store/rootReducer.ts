import { combineReducers } from 'redux';
import Coworker from './coworker/coworker.reducer';
import Pagination from './pagination/pagination.reducer';
import Order from './order/order.reducer';
import Filters from './filters/filters.reducer';

const rootReducer = combineReducers({
    data: Coworker,
    pagination: Pagination,
    order: Order,
    filters: Filters
});

export default rootReducer;
