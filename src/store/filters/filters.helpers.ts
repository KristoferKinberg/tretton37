import {Coworker, Filter} from "../../types";

export const applyLocationFilter = (data: Coworker[], filter: Filter) =>
    data.filter(({ office }: Coworker) => filter[office]);

export const applySocialFilter = (data: Coworker[], filter: Filter) => {
    return data.filter((coworker: Coworker) => {
        const condition = Object.keys(filter).filter((item: string) => !filter[item]);
        // @ts-ignore
        return condition.length === condition.filter((social) => coworker[social]).length;
    });
}

const filters = [
    applyLocationFilter,
    applySocialFilter
];

const applyFilters = (unfilteredData: Coworker[], filter: Filter) =>
    filters.reduce((data: any, func) => func(data, filter), unfilteredData);
