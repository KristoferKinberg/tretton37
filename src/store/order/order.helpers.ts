import {Coworker} from "../../types";

// @ts-ignore
export const order = (key: string) =>  (a: Coworker, b: Coworker) => a[key] > b[key]
    ? 1
    : -1;
