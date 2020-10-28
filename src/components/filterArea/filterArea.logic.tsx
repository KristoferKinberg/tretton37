import {useDispatch, useSelector} from "react-redux";
import {capitalizeFirstLetter} from "../../helpers";
import {directions, Filters, Order} from "../../types";
import {actionOrderBy} from "../../store/order/order.actions";
import {selectOrder} from "../../store/order/order.selectors";
import {selectFilters} from "../../store/filters/filters.selectors";
import {actionSetFilter} from "../../store/filters/filters.actions";

export const orderableKeys = [
    'name',
    'email',
    'phoneNumber',
    'office',
]

export interface FilterAreaLogicFunc {
    orderNameByAsc: () => any;
    orderNameByDes: () => any;
    orderEmailByAsc: () => any;
    orderEmailByDes: () => any;
    orderPhoneNumberByAsc: () => any;
    orderPhoneNumberByDes: () => any;
    orderOfficeByAsc: () => any;
    orderOfficeByDes: () => any;
    updateFilter: (filter: string, key: string) => any;
    by: string;
    dir: directions;
    filters: Filters,
}

const FilterAreaLogic = (): FilterAreaLogicFunc => {
    const dispatch = useDispatch();
    const { by, dir }: Order = useSelector(selectOrder)
    const filters: Filters = useSelector(selectFilters)

    const updateFilter = (filter: string, key: string) => dispatch(actionSetFilter(filter, key));

    const generateOrderables = (): any => orderableKeys.reduce((newObj, key: string) => ({
        ...newObj,
        [`order${capitalizeFirstLetter(key)}ByAsc`]: () => dispatch(actionOrderBy(key, directions.ASC)),
        [`order${capitalizeFirstLetter(key)}ByDes`]: () => dispatch(actionOrderBy(key, directions.DES))
    }), {});

    return {
        ...generateOrderables(),
        by,
        dir,
        filters,
        updateFilter,
    };
};

export default FilterAreaLogic;
