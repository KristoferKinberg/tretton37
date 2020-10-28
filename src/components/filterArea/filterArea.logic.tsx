import {useDispatch, useSelector} from "react-redux";
import {capitalizeFirstLetter} from "../../helpers";
import {directions, Order} from "../../types";
import {actionOrderBy} from "../../store/order/order.actions";
import {selectOrder} from "../../store/order/order.selectors";

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
    by: string;
    dir: directions;
}

const FilterAreaLogic = (): FilterAreaLogicFunc => {
    const dispatch = useDispatch();
    const { by, dir }: Order = useSelector(selectOrder)

    const generateOrderables = (): any => orderableKeys.reduce((newObj, key: string) => ({
        ...newObj,
        [`order${capitalizeFirstLetter(key)}ByAsc`]: () => dispatch(actionOrderBy(key, directions.ASC)),
        [`order${capitalizeFirstLetter(key)}ByDes`]: () => dispatch(actionOrderBy(key, directions.DES))
    }), {});

    return {
        ...generateOrderables(),
        by,
        dir,
    };
};

export default FilterAreaLogic;
