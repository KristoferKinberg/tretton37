export interface Coworker {
    name: string;
    email: string;
    phoneNumber: string;
    office: string;
    tagline: string | null;
    mainText: string;
    github: string | null;
    twitter: string | null;
    stackOverflow: string | null;
    linkedIn: string | null;
    imagePortraitUrl: string,
    imageBodyUrl: string;
    imageWallOfLeetUrl: string;
    highlighted: boolean;
}

export interface CoworkersObj {
    [key: string]: Coworker;
}

export interface Page {
    [key: number]: string[];
}

export interface Pagination {
    selectedPage: number;
    pages: Page;
}

export interface Order {
    by: string | null;
    dir: directions | null;
}

export interface Filter {
    [key: string]: boolean;
}

export interface Filters {
    office: Filter;
    contactLinks: Filter;
}

export interface ReduxState {
    data: CoworkersObj;
    pagination: Pagination;
    order: Order;
    filters: Filters;
}

export enum filters {
    OFFICE = 'office',
    CONTACT_LINKS = 'contactLinks'
}

export enum directions {
    ASC = 'Asc',
    DES = 'Des'
}

export type NAME = 'name';
export type EMAIL = 'email';
export type PHONENUMBER = 'phoneNumber';
export type OFFICE = 'office';

export enum Orderables {
    NAME,
    EMAIL,
    PHONENUMBER,
    OFFICE,
}
